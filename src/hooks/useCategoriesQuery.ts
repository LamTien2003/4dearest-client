import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { buildQueryString } from "@/utils/helper";

import { Category } from "@/types";
import axiosClient from "@/services/axiosClient";

const useCategoriesQuery = (
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
    isLoading: isCategoriesLoading,
    refetch: categoriesRefetch,
  } = useQuery({
    queryKey: ["category", page, limit, queryString],
    queryFn: async () => {
      try {
        const response = await axiosClient.get(
          `/category?page=${page}&limit=${limit}&${queryString}`
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
  });

  return {
    isCategoriesLoading,
    categoriesRefetch,
    statusCode: data?.status || 500,
    statusString: data?.data?.status || "failed",
    categories: (data?.data?.data as Category[]) || [],
  };
};

export default useCategoriesQuery;
