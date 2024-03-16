import { useRouter } from "next/navigation";
import { useContext } from "react";

import { CartThemeContext } from "@/components/CartContextProvider";
import useToast from "@/hooks/useToast";

import { ProductPayload, ShippingMethodPayload } from "@/types";

interface CreateOrderRequestParams {
  products: {
    product_id: string;
    variants: {
      sku: string;
      amount: number;
      price: number;
    }[];
  }[];
  shippingMethod: {
    type: string;
    country: string;
  };
  couponUsed?: string;
  shippingInfo?: Object;
}

interface CaptureOrderParams {
  orderID: string;
  shippingInfo?: {
    full_name: string;
    country: string;
    admin_area_1: string;
    admin_area_2: string;
    address_line_1: string;
    address_line_2: string;
    postal_code: string;
    phoneNumber: string;
    email: string;
  };
  couponUsed?: string;
  products: ProductPayload[];
  shippingMethod: ShippingMethodPayload;
}

const useOrderMutation = () => {
  const router = useRouter();
  const { displayErrorToast } = useToast();
  const { clearCart } = useContext(CartThemeContext);

  const createOrderRequest = async (variables: CreateOrderRequestParams) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_REQUEST_URL}/order/request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products: variables.products,
            shippingMethod: variables.shippingMethod,
            shippingInfo: variables.shippingInfo,
            couponUsed: variables.couponUsed ? variables.couponUsed : undefined,
          }),
        }
      );
      if (!response.ok) {
        throw await response.json();
      }
      const order = await response.json();
      return order.id;
    } catch (error: any) {
      displayErrorToast(
        error?.title || "Something went wrong",
        error.msg || "Something went wrong"
      );
    }
  };

  const captureOrder = async (variables: CaptureOrderParams) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_REQUEST_URL}/order/capture/${variables.orderID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: variables.orderID,
            shippingInfo: variables.shippingInfo,
            products: variables.products,
            shippingMethod: variables.shippingMethod,
            couponUsed: variables?.couponUsed,
          }),
        }
      );
      if (!response.ok) {
        throw await response.json();
      }

      clearCart();
      const order = await response.json();
      router.push(`/thank-you/${order?.data?.data?.logisticInfo?.email}`);
      return order;
    } catch (error: any) {
      displayErrorToast(
        error?.title || "Something went wrong",
        error.msg || "Something went wrong"
      );
    }
  };

  return {
    createOrderRequest,
    captureOrder,
  };
};

export default useOrderMutation;
