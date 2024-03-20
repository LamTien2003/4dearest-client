"use client";

import classNames from "classnames";
import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useContext, useMemo, ReactNode } from "react";

import envelopeIcon from "/public/images/icons/envelope.svg";
import shieldIcon from "/public/images/icons/shield.svg";
import rulerIcon from "/public/images/icons/ruler.svg";
import ticketIcon from "/public/images/icons/ticket-simple.svg";
import sizeChartCandlesImage from "/public/images/size-chart-candles-holder.jpg";
import Button from "@/components/Button";
import {
  DetailProductContextValue,
  DetailProductThemeContext,
} from "@/components/DetailProduct/DetailProductContext";
import AdditionalInfoBox from "@/components/DetailProduct/ProductInfo/AdditionalInfoBox";
import GetCouponModal from "@/components/DetailProduct/ProductInfo/PriceAndActionBox/GetCouponModal";
import PolicyModal from "@/components/DetailProduct/ProductInfo/PriceAndActionBox/PolicyModal";
import ContactModal from "@/components/DetailProduct/ProductInfo/PriceAndActionBox/ContactModal";
import NumberInput from "@/components/Input/NumberInput";
import Modal from "@/components/Modal";
import useOrderMutation from "@/hooks/useOrderMutation";
import useToast from "@/hooks/useToast";
import { formatCurrency } from "@/utils/helper";

import { ButtonVariant } from "@/components/Button/Button.d";
import { ModalSize } from "@/components/Modal/Modal.d";
import { CartStorage, Product, ProductPayload } from "@/types";
import styles from "./PriceAndActionBox.module.css";

enum ModalType {
  Chart = "chart",
  Policy = "policy",
  Contact = "contact",
  Get_Coupon = "coupon",
  Hidden = "",
}

interface PriceAndActionBoxProps {
  product: Product;
}

const PriceAndActionBox = ({ product }: PriceAndActionBoxProps) => {
  const { displayErrorToast } = useToast();
  const context = useContext<DetailProductContextValue>(
    DetailProductThemeContext
  );
  const [amount, setAmount] = useState(1);
  const [modal, setModal] = useState<string>(ModalType.Hidden);
  const [color, setColor] = useState(product?.variants[0].color || "");
  const [initialPrice, setInitialPrice] = useState(
    product?.variants[0].initialPrice || 0
  );
  const [discountPrice, setDiscountPrice] = useState(
    product?.variants[0].discountPrice
  );
  const { createOrderRequest, captureOrder } = useOrderMutation();

  const selectedVariant = useMemo(() => {
    return (
      product?.variants?.find(variant => variant?.color === color) ||
      product?.variants[0]
    );
  }, [color]);

  const modalContent: {
    [key: string]: {
      icon?: ReactNode;
      title: string;
      body: ReactNode;
      hidden?: boolean;
    };
  } = useMemo(
    () => ({
      [ModalType.Chart]: {
        icon: <Image src={rulerIcon} width={21} height={21} alt="Viewing" />,
        title: "Size Chart",
        body: (
          <Image src={product?.imageChart} width={500} height={500} alt="" />
        ),
        hidden: !product?.imageChart,
      },
      [ModalType.Policy]: {
        icon: (
          <Image
            src={shieldIcon}
            width={21}
            height={21}
            alt="Shipping and return policy"
          />
        ),
        title: "Shipping and return",
        body: <PolicyModal />,
      },
      [ModalType.Contact]: {
        icon: (
          <Image src={envelopeIcon} width={21} height={21} alt="contact info" />
        ),
        title: "Contact with us",
        body: <ContactModal />,
      },
      [ModalType.Get_Coupon]: {
        icon: (
          <Image src={envelopeIcon} width={21} height={21} alt="contact info" />
        ),
        title: "Get coupon discount",
        body: <GetCouponModal />,
        hidden: true,
      },
    }),
    []
  );

  const onAddToCart = () => {
    if (selectedVariant.inventory <= 0) {
      return displayErrorToast("Sold out", "Selected product is sold out now");
    }

    const currentCart =
      (JSON.parse(localStorage?.getItem("cart") || "[]") as CartStorage[]) ||
      [];
    let indexCurrentProduct = 0;
    const existCurrentProduct = currentCart?.find((item, index) => {
      if (item._id === product._id) {
        indexCurrentProduct = index;
        return true;
      }
      return false;
    });

    if (existCurrentProduct) {
      let indexVariant = 0;
      const existVariant = existCurrentProduct?.variants?.find(
        (variant, index) => {
          if (variant.sku === selectedVariant?.sku) {
            indexVariant = index;
            return true;
          }
          return false;
        }
      );

      if (existVariant) {
        existVariant.amount += amount;
        Object.assign(
          existVariant,
          existCurrentProduct?.variants[indexVariant]
        );
      } else {
        existCurrentProduct.variants = [
          ...existCurrentProduct.variants,
          {
            amount,
            color,
            sku: selectedVariant?.sku,
          },
        ];
      }

      Object.assign(existCurrentProduct, currentCart[indexCurrentProduct]);
      localStorage.setItem("cart", JSON.stringify(currentCart));
      return window.dispatchEvent(new Event("addToCart"));
    }

    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...currentCart,
        {
          _id: product._id,
          variants: [
            {
              amount,
              color,
              sku: selectedVariant?.sku,
            },
          ],
        },
      ])
    );
    return window.dispatchEvent(new Event("addToCart"));
  };

  const onCreateOrderRequest = async () => {
    const productToPay: ProductPayload = {
      product_id: product._id,
      product_name: product.title,
      variants: [
        {
          image: product.imagesProduct[selectedVariant.indexImageDisplay],
          color: selectedVariant.color,
          sku: selectedVariant.sku,
          amount,
          price: selectedVariant.discountPrice,
        },
      ],
    };

    return await createOrderRequest({
      products: [productToPay],
      shippingMethod: {
        type: discountPrice * amount >= 50 ? "freeShipping" : "standard",
        country: "US",
      },
    });
  };
  const onApprove = () => {
    const productToPay: ProductPayload = {
      product_id: product._id,
      product_name: `${product.title}`,
      variants: [
        {
          image: product.imagesProduct[selectedVariant.indexImageDisplay],
          sku: selectedVariant.sku,
          color: selectedVariant.color,
          amount,
          price: selectedVariant.discountPrice,
        },
      ],
    };

    return (data: any) =>
      captureOrder({
        orderID: data.orderID,
        products: [productToPay],
        shippingMethod: {
          type: discountPrice * amount >= 50 ? "freeShipping" : "standard",
          country: "US",
        },
      });
  };

  return (
    <>
      <div className={styles["price-box"]}>
        <p className={styles["price-box__price"]}>
          <span className={styles["initial-price"]}>
            {formatCurrency(initialPrice)}
          </span>
          <span className={styles["discount-price"]}>
            {formatCurrency(discountPrice)}
          </span>
        </p>
        <div
          className={styles["price-box-popup__item"]}
          onClick={() => setModal(ModalType.Get_Coupon)}
        >
          <Image
            src={ticketIcon}
            width={24}
            height={24}
            alt="Coupon discount"
          />
          Coupon Discount List
        </div>
        <div className={styles["price-box-popup"]}>
          {Object.entries(modalContent).map(([key, item]) => {
            if (item?.hidden) {
              return;
            }
            return (
              <div
                className={styles["price-box-popup__item"]}
                onClick={() => setModal(key)}
                key={item.title}
              >
                {item.icon}
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles["picking-box"]}>
        <div className={styles["color-picking"]}>
          <p className={styles["color-picking__title"]}>
            Color: {color.toUpperCase()}
          </p>
          <div className={styles["color-picking__list"]}>
            {product?.variants.map(variant => (
              <Tooltip
                key={variant?.sku}
                label={
                  variant?.inventory > 0 ? (
                    variant?.color
                  ) : (
                    <span className="color--error">Sold out</span>
                  )
                }
                placement="top"
                hasArrow
                fontSize={"medium"}
              >
                <div>
                  <label
                    htmlFor={`color-radio-${variant?.sku}`}
                    className={classNames(styles["circle-radio"], {
                      [styles["circle-radio--active"]]:
                        variant?.color === color,
                      [styles["disabled-radio"]]: variant.inventory <= 0,
                    })}
                  >
                    <Image
                      src={product.imagesProduct[variant.indexImageDisplay]}
                      width={50}
                      height={40}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  </label>
                  <input
                    type="radio"
                    name="color"
                    id={`color-radio-${variant?.sku}`}
                    value={variant?.color}
                    checked={variant?.color === color}
                    hidden
                    onChange={e => {
                      setColor(e.target.value);
                      setInitialPrice(variant.initialPrice);
                      setDiscountPrice(variant.discountPrice);
                      context.setActiveImage(
                        product.imagesProduct[variant.indexImageDisplay]
                      );
                    }}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className={styles["actions"]}>
          <div className={styles["add-to-cart"]}>
            <NumberInput
              value={amount}
              onChange={val => setAmount(val)}
              onMaxValue={() =>
                displayErrorToast("Exceeded inventory quantity")
              }
              className={styles["amount"]}
              min={1}
              max={selectedVariant?.inventory || 1}
            />
            <Button
              variant={ButtonVariant.Solid}
              className="flex-1"
              onClick={onAddToCart}
            >
              Add to cart
            </Button>
          </div>
          <p
            className={styles["note-shipping"]}
          >{`Note: We'll use and charge the standard shipping fee by default if your order less than 50$`}</p>
          <PayPalButtons
            style={{
              height: 48,
              color: "black",
              label: "buynow",
            }}
            createOrder={onCreateOrderRequest}
            onApprove={onApprove()}
            forceReRender={[selectedVariant, amount]}
          />
        </div>
      </div>

      <AdditionalInfoBox product={product} variant={selectedVariant} />

      <Modal
        isOpen={!!modal}
        onClose={() => setModal(ModalType.Hidden)}
        title={
          <p style={{ width: "100%", textAlign: "center", fontSize: "2rem" }}>
            {modalContent?.[modal as keyof typeof modalContent]?.title}
          </p>
        }
        size={ModalSize.Auto}
      >
        {modalContent?.[modal as keyof typeof modalContent]?.body}
      </Modal>
    </>
  );
};

export default PriceAndActionBox;
