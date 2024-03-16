import { useQuery } from "@tanstack/react-query";

import { ShippingMethod } from "@/types";
import axiosClient from "@/services/axiosClient";

const useShippingMethodQuery = (country: string) => {
  const { data, isLoading: isLoadingShippingMethod } = useQuery({
    queryKey: ["shipping-method", country],
    queryFn: async () => {
      try {
        const response = await axiosClient.get(
          `/utils/get-shipping-method/${country}`
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
  });

  return {
    statusCode: data?.status || 500,
    statusString: data?.data?.status || "failed",
    shippingMethods: (data?.data?.data as ShippingMethod[]) || [],
    isLoadingShippingMethod,
  };
};

export default useShippingMethodQuery;
