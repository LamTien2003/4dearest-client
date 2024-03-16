import { useQuery } from "@tanstack/react-query";

import { CartItem, CartStorage } from "@/types";
import axiosClient from "@/services/axiosClient";

const useCartInformationQuery = (cartStorage: CartStorage[]) => {
  const {
    data,
    isLoading: isCartLoading,
    refetch: cartRefetch,
  } = useQuery({
    queryKey: ["cart", JSON.stringify(cartStorage)],
    queryFn: async () => {
      try {
        const response = await axiosClient.post(
          "/cart/getInformation",
          cartStorage
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
  });

  return {
    isCartLoading,
    cartRefetch,
    statusCode: data?.status || 500,
    statusString: data?.data?.status || "failed",
    cart: (data?.data?.data as CartItem[]) || [],
  };
};

export default useCartInformationQuery;
