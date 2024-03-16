import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import axiosClient from "@/services/axiosClient";
import { buildQueryString } from "@/utils/helper";

import { Product } from "@/types";

const useProductsQuery = (
  page: number,
  limit: number,
  queryStringObject?: Object
) => {
  const queryString = useMemo(
    () => buildQueryString(queryStringObject),
    [queryStringObject]
  );

  const {
    data,
    isLoading: isProductsLoading,
    refetch: productsRefetch,
  } = useQuery({
    queryKey: ["products", page, limit, queryString],
    queryFn: async () => {
      try {
        const response = await axiosClient.get(
          `/product?page=${page}&limit=${limit}&${queryString}`
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
  });

  return {
    isProductsLoading,
    productsRefetch,
    statusCode: data?.status || 500,
    statusString: data?.data?.status || "failed",
    products: (data?.data?.data as Product[]) || [],
  };
};

export default useProductsQuery;
