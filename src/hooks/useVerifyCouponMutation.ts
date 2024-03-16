import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/services/axiosClient";
import useToast from "@/hooks/useToast";

import { ProductPayload, ShippingMethodPayload } from "@/types";

interface Props {
  setCouponValue: (value: string) => void;
  setShippingDiscount: (value: number) => void;
  setPriceDiscount: (value: number) => void;
}

const useVerifyCouponMutation = ({
  setCouponValue,
  setPriceDiscount,
  setShippingDiscount,
}: Props) => {
  const { displaySuccessToast, displayErrorToast } = useToast();

  const { mutate: verifyCoupon, isPending: isVerifyingCoupon } = useMutation({
    mutationFn: async (variables: {
      couponUsed: string;
      products: ProductPayload[];
      shippingMethod: ShippingMethodPayload;
    }) => {
      try {
        const response = await axiosClient.post("/coupon/verify", {
          couponUsed: variables.couponUsed,
          products: variables.products,
          shippingMethod: variables.shippingMethod,
        });
        return response;
      } catch (error: any) {
        throw error;
      }
    },
    onSuccess(response, variables) {
      const { priceDiscounted, shippingFeeDiscounted } = response.data.data;
      setCouponValue(variables.couponUsed);
      setPriceDiscount(priceDiscounted);
      setShippingDiscount(shippingFeeDiscounted);
      displaySuccessToast(
        "Apply coupon successfully",
        "Coupon has been applied"
      );
    },
    onError(responseError: any) {
      const error = responseError?.response?.data;
      setCouponValue("");
      setPriceDiscount(0);
      setShippingDiscount(0);
      displayErrorToast(
        error?.title || "Something went wrong",
        error.msg || "Something went wrong"
      );
    },
  });

  return {
    verifyCoupon,
    isVerifyingCoupon,
  };
};

export default useVerifyCouponMutation;
