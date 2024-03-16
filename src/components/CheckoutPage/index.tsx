"use client";
import { Form, Formik, setNestedObjectValues } from "formik";
import { AbsoluteCenter, Divider, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { PayPalButtons } from "@paypal/react-paypal-js";
import {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import CircleQuestionIcon from "/public/images/icons/circle-question.svg";
import PaypalIcon from "/public/images/icons/paypal.svg";
import { COLOR_GRAY_700 } from "@/constants/color";
import { initialValues } from "@/constants/checkout";
import Button from "@/components/Button";
import CouponBox from "@/components/CheckoutPage/CouponBox";
import CartItemList from "@/components/CheckoutPage/CartItemList";
import { CartThemeContext } from "@/components/CartContextProvider";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Spinner from "@/components/Loading/Spinner";
import PaymentResult from "@/components/CheckoutPage/PaymentResult";
import RadioCardGroup from "@/components/RadioCardGroup";
import useOrderMutation from "@/hooks/useOrderMutation";
import useShippingMethodQuery from "@/hooks/useShippingMethodQuery";
import useVerifyCouponMutation from "@/hooks/useVerifyCouponMutation";
import useLocationQuery from "@/hooks/useLocationQuery";
import { formatCurrency } from "@/utils/helper";
import { validateRequired } from "@/utils/common";
import { countries } from "@/constants/country";

import { InputSize } from "@/components/Input/Input.d";
import { SelectSize, SelectVariant } from "@/components/Select/Select.d";
import { ProductPayload, ShippingType } from "@/types";
import styles from "./CheckoutPage.module.css";

import { ButtonColorType, ButtonVariant } from "@/components/Button/Button.d";

interface ShippingOption {
  label: ReactNode;
  value: any;
  price: number;
  suffix?: ReactNode;
}

const paymentOptions = [
  {
    label: "Paypal",
    value: "paypal",
    suffix: <Image src={PaypalIcon} alt="" width={70} height={30} />,
    children: (
      <>
        <div style={{ textAlign: "center" }}>
          After clicking Pay with PayPal, you will be redirected to PayPal to
          complete your purchase securely.
        </div>
        <div style={{ textAlign: "center" }}>
          {`If you don't have Paypal account ? You can pay with by debit or credit
          card by click "Pay with Debit or Credit Card" button there. `}
        </div>
      </>
    ),
  },
];

const CheckoutPage = () => {
  const { cart } = useContext(CartThemeContext);

  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);
  const [paymentMethod, setPaymentMethod] = useState(paymentOptions[0].value);
  const [shippingMethod, setShippingMethod] = useState(ShippingType.standard);
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);

  const [priceDiscount, setPriceDiscount] = useState(0);
  const [shippingDiscount, setShippingDiscount] = useState(0);
  const [couponUsed, setCouponUsed] = useState("");

  const { states } = useLocationQuery(selectedCountry);
  const { shippingMethods, isLoadingShippingMethod } =
    useShippingMethodQuery(selectedCountry);
  const { verifyCoupon, isVerifyingCoupon } = useVerifyCouponMutation({
    setCouponValue: setCouponUsed,
    setPriceDiscount,
    setShippingDiscount,
  });
  const { createOrderRequest, captureOrder } = useOrderMutation();

  const subTotal = useMemo(() => {
    return cart.reduce((total, current) => {
      const totalPriceItem = current.variants.reduce(
        (totalOfVariant, currentVariant) =>
          Number(totalOfVariant) +
          Number(currentVariant.discountPrice * currentVariant.buyAmount),
        0
      );
      return total + totalPriceItem;
    }, 0);
  }, [cart]);

  const shippingFee = useMemo(() => {
    return shippingOptions.find(option => option.value === shippingMethod)
      ?.price;
  }, [shippingMethod, shippingOptions]);

  const totalPayment = useMemo(() => {
    return subTotal + (shippingFee || 0) - priceDiscount - shippingDiscount;
  }, [subTotal, shippingFee, priceDiscount, shippingDiscount]);

  const statesOptions = useMemo(() => {
    return (
      states?.map((item: any) => ({
        label: item.name,
        value: item.name,
      })) || []
    );
  }, [states]);

  const onCreateOrderRequest = useCallback(
    async (values?: typeof initialValues) => {
      const products: ProductPayload[] = cart.map(item => {
        return {
          product_id: item._id,
          product_name: item.title,
          variants: item.variants.map(variant => ({
            image: item.imagesProduct[variant.indexImageDisplay],
            sku: variant.sku,
            amount: variant.buyAmount,
            price: variant.discountPrice,
            color: variant.color,
          })),
        };
      });

      if (!values) {
        return await createOrderRequest({
          products,
          shippingMethod: {
            type: shippingMethod,
            country: selectedCountry,
          },
          couponUsed,
        });
      }

      const shippingInfo = {
        full_name: `${values?.firstName} ${values?.lastName}`,
        country: values.country,
        admin_area_1: values?.state,
        admin_area_2: values?.city,
        address_line_1: values?.address,
        address_line_2: values?.department,
        postal_code: values?.postalCode,
        phoneNumber: values?.phoneNumber,
        email: values?.email,
      };
      return await createOrderRequest({
        products,
        shippingMethod: {
          type: shippingMethod,
          country: selectedCountry,
        },
        shippingInfo,
        couponUsed,
      });
    },
    [cart, shippingMethod, priceDiscount, shippingDiscount, couponUsed]
  );

  const onApprove = (values?: typeof initialValues) => {
    const products: ProductPayload[] = cart.map(item => {
      return {
        product_id: item._id,
        product_name: item.title,
        variants: item.variants.map(variant => ({
          image: item.imagesProduct[variant.indexImageDisplay],
          sku: variant.sku,
          amount: variant.buyAmount,
          price: variant.discountPrice,
          color: variant.color,
        })),
      };
    });

    if (!values) {
      return (data: any) =>
        captureOrder({
          orderID: data.orderID,
          products,
          shippingMethod: {
            type: shippingMethod,
            country: selectedCountry,
          },
          couponUsed: couponUsed ? couponUsed : undefined,
        });
    }

    const shippingInfo = {
      full_name: `${values?.firstName} ${values?.lastName}`,
      country: selectedCountry,
      admin_area_1: values?.state,
      admin_area_2: values?.city,
      address_line_1: values?.address,
      address_line_2: values?.department,
      postal_code: values?.postalCode,
      phoneNumber: values?.phoneNumber,
      email: values?.email,
    };
    return (data: any) =>
      captureOrder({
        orderID: data.orderID,
        shippingInfo,
        products,
        shippingMethod: {
          type: shippingMethod,
          country: selectedCountry,
        },
        couponUsed: couponUsed ? couponUsed : undefined,
      });
  };

  const onChangeShippingMethod = (value: string) => setShippingMethod(value);

  useEffect(() => {
    const products = cart.map(item => {
      return {
        product_id: item._id,
        product_name: item.title,
        variants: item.variants.map(variant => ({
          image: item.imagesProduct[variant.indexImageDisplay],
          sku: variant.sku,
          amount: variant.buyAmount,
          color: variant.color,
          price: variant.discountPrice,
        })),
      };
    });
    if (couponUsed) {
      verifyCoupon({
        couponUsed,
        products,
        shippingMethod: {
          type: shippingMethod,
          country: selectedCountry,
        },
      });
    }
  }, [cart, shippingMethod]);

  useEffect(() => {
    const options = [
      ...shippingMethods.map(method => ({
        label: (
          <div className="d-flex flex-col">
            <span className="d-flex gap--6 align-center">
              {ShippingType?.[method.shippingType as "standard"]}

              {method.shippingType === "secured" && (
                <Tooltip
                  label="We will cover every thing if your package is lost, stolen or broken"
                  fontSize={"small"}
                >
                  <Image
                    src={CircleQuestionIcon}
                    alt="We will cover every thing if your package is lost, stolen or broken"
                    style={{ width: 14, height: 14 }}
                  />
                </Tooltip>
              )}
            </span>
            {/* <span className={styles["estimate-time"]}>
              Estimate: {method.estimateStartDay} to {method.estimateEndDay}
            </span> */}
          </div>
        ),
        value: method.shippingType,
        price: method.shippingFee,
        suffix: formatCurrency(method.shippingFee),
      })),
      {
        label: (
          <span>
            Free Shipping{" "}
            {subTotal < 50 &&
              `(You need to buy more ${formatCurrency(50 - subTotal)})`}
          </span>
        ),
        value: "freeShipping",
        price: 0,
        suffix: "0.00$",
        disabled: !(subTotal >= 50),
      },
    ];
    setShippingOptions(options);
    setShippingMethod(options[0].value);
  }, [shippingMethods, subTotal]);

  if (!cart.length) {
    return (
      <div
        className={styles["wrapper"]}
        style={{
          fontSize: 24,
          color: COLOR_GRAY_700,
          fontWeight: 500,
          display: "flex",
          gap: "1.4rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Your cart is empty</span>
        <Button
          variant={ButtonVariant.Solid}
          colorType={ButtonColorType.Black}
          href="/"
        >
          Back to home page
        </Button>
      </div>
    );
  }

  return (
    <Formik
      initialValues={{
        ...initialValues,
        country: selectedCountry,
        state: states?.[0]?.name || "",
      }}
      onSubmit={() => {}}
      enableReinitialize
    >
      {({ values, validateForm, setErrors, setTouched, setFieldValue }) => {
        return (
          <Form className={styles["wrapper"]}>
            <div className={styles["left"]}>
              <div className={styles["checkout-information"]}>
                <div className={styles["express-checkout"]}>
                  <h2 className={styles["express-checkout__title"]}>
                    Express checkout
                  </h2>
                  <div className={styles["express-checkout__method"]}>
                    <PayPalButtons
                      style={{
                        height: 38,
                        label: "buynow",
                      }}
                      createOrder={async () => await onCreateOrderRequest()}
                      onApprove={onApprove()}
                      forceReRender={[totalPayment]}
                    />
                  </div>
                </div>

                <div className={styles["divider"]}>
                  <Divider colorScheme="red" />
                  <AbsoluteCenter bg="white" px="4">
                    OR
                  </AbsoluteCenter>
                </div>

                <div className={styles["contact"]}>
                  <h2 className={styles["contact__title"]}>Contact</h2>
                  <Input
                    name="email"
                    placeholder="*Email or mobile phone number"
                    size={InputSize.Large}
                    validate={value =>
                      validateRequired("Email is required", value)
                    }
                  />
                </div>

                <div className={styles["delivery"]}>
                  <h2 className={styles["contact__title"]}>Delivery</h2>
                  <Select
                    name="country"
                    placeholder="Country/Region"
                    options={countries}
                    onChange={value => {
                      setSelectedCountry(value);
                      setFieldValue("country", value);
                      setFieldValue("state", states?.[0].name);
                    }}
                    size={SelectSize.Full}
                    variant={SelectVariant.Filled}
                    validate={(value: any) =>
                      validateRequired("Country is required", value)
                    }
                  />
                  <div className={styles["name-box"]}>
                    <Input
                      name="firstName"
                      placeholder="*First Name"
                      size={InputSize.Large}
                      validate={value =>
                        validateRequired("First Name is required", value)
                      }
                    />
                    <Input
                      name="lastName"
                      placeholder="*Last Name"
                      size={InputSize.Large}
                      validate={value =>
                        validateRequired("Last name is required", value)
                      }
                    />
                  </div>
                  <Input
                    name="company"
                    placeholder="Company (Optional)"
                    size={InputSize.Large}
                  />
                  <Input
                    name="department"
                    placeholder="Apartment, suite, etc. (Optional)"
                    size={InputSize.Large}
                  />
                  <Input
                    name="address"
                    placeholder="*Address"
                    size={InputSize.Large}
                    validate={value =>
                      validateRequired("Address is required", value)
                    }
                  />
                  <div className={styles["logistic-box"]}>
                    <Input
                      name="city"
                      placeholder="*City"
                      size={InputSize.Large}
                      validate={value =>
                        validateRequired("City is required", value)
                      }
                    />
                    {!!states?.length && (
                      <Select
                        name="state"
                        placeholder="State/Province"
                        options={statesOptions}
                        onChange={value => {
                          setFieldValue("state", value);
                        }}
                        size={SelectSize.Full}
                        variant={SelectVariant.Filled}
                      />
                    )}

                    <Input
                      name="postalCode"
                      placeholder="*Postal code"
                      size={InputSize.Large}
                      validate={value =>
                        validateRequired("Postal code is required", value)
                      }
                    />
                  </div>
                  <Input
                    name="phoneNumber"
                    placeholder="*Phone number"
                    size={InputSize.Large}
                    validate={value =>
                      validateRequired("Phone number is required", value)
                    }
                  />
                </div>

                <div className={styles["shipping-method"]}>
                  <h2 className={styles["contact__title"]}>Shipping method</h2>
                  {isLoadingShippingMethod && <Spinner />}
                  <RadioCardGroup
                    options={shippingOptions}
                    value={shippingMethod}
                    onChange={onChangeShippingMethod}
                  />
                </div>

                <div className={styles["payment-method"]}>
                  <h2 className={styles["contact__title"]}>Payment method</h2>
                  <RadioCardGroup
                    options={paymentOptions}
                    value={paymentMethod}
                    onChange={value => setPaymentMethod(value)}
                  />
                </div>
                <PayPalButtons
                  className="w--100"
                  style={{
                    layout: "horizontal",
                    label: "pay",
                    color: "black",
                  }}
                  onClick={async (data, actions) => {
                    const errorsValidate = await validateForm();
                    setErrors(errorsValidate);
                    setTouched(setNestedObjectValues(errorsValidate, true));

                    if (Object.keys(errorsValidate).length === 0) {
                      return actions.resolve();
                    }
                    return actions.reject();
                  }}
                  createOrder={async () => await onCreateOrderRequest(values)}
                  onApprove={onApprove(values)}
                  forceReRender={[totalPayment, values]}
                />
              </div>
            </div>

            <div className={styles["right"]}>
              <div className={styles["right-wrapper"]}>
                <CartItemList cart={cart} />

                {isVerifyingCoupon ? (
                  <Spinner />
                ) : (
                  <>
                    <CouponBox
                      setCouponValue={setCouponUsed}
                      cart={cart}
                      shippingMethod={{
                        type: shippingMethod,
                        country: selectedCountry,
                      }}
                      setPriceDiscount={setPriceDiscount}
                      setShippingDiscount={setShippingDiscount}
                    />
                    <PaymentResult
                      priceDiscount={priceDiscount}
                      shippingDiscount={shippingDiscount}
                      shippingFee={shippingFee || 0}
                      subTotal={subTotal}
                      totalPayment={totalPayment}
                    />
                  </>
                )}
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CheckoutPage;
