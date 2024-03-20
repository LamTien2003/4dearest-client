import { useFormikContext } from "formik";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Loading/Spinner";
import useVerifyCouponMutation from "@/hooks/useVerifyCouponMutation";

import {
  ButtonColorType,
  ButtonSize,
  ButtonVariant,
} from "@/components/Button/Button.d";
import { InputSize } from "@/components/Input/Input.d";
import { CartItem, ShippingMethodPayload } from "@/types";
import { initialValues } from "@/constants/checkout";

interface CouponBoxProps {
  setCouponValue: (value: string) => void;
  cart: CartItem[];
  shippingMethod: ShippingMethodPayload;
  setShippingDiscount: (value: number) => void;
  setPriceDiscount: (value: number) => void;
}

const CouponBox = ({
  setShippingDiscount,
  setPriceDiscount,
  setCouponValue,
  cart,
  shippingMethod,
}: CouponBoxProps) => {
  const { values } = useFormikContext<typeof initialValues>();

  const { verifyCoupon, isVerifyingCoupon } = useVerifyCouponMutation({
    setCouponValue,
    setPriceDiscount,
    setShippingDiscount,
  });

  const onVerifyCoupon = (couponUsed: string) => {
    const products = cart.map(item => {
      return {
        product_id: item._id,
        product_name: item.title,
        variants: item.variants.map(variant => ({
          sku: variant.sku,
          amount: variant.buyAmount,
          price: variant.discountPrice,
          color: variant.color,
          image: item.imagesProduct[variant.indexImageDisplay],
        })),
      };
    });

    verifyCoupon({ couponUsed, products, shippingMethod });
  };

  return (
    <>
      <Input
        name="coupon"
        size={InputSize.Large}
        placeholder="Discount code"
        className="bg--white"
      />
      <Button
        variant={ButtonVariant.Solid}
        colorType={ButtonColorType.Primary}
        size={ButtonSize.ExtraLarge}
        disabled={!values.coupon}
        isSubmit
        onClick={e => {
          e.preventDefault();
          if (!values.coupon) {
            return;
          }
          onVerifyCoupon(values.coupon);
        }}
      >
        {isVerifyingCoupon ? <Spinner /> : "Apply"}
      </Button>
    </>
  );
};

export default CouponBox;
