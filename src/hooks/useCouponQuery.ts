import axiosClient from "@/services/axiosClient";
import { useQuery } from "@tanstack/react-query";

const useCouponQuery = () => {
  const { data: coupons, isLoading: isFetchingCoupons } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get(
          `${process.env.NEXT_PUBLIC_API_REQUEST_URL}/coupon`
        );
        return response || [];
      } catch (error: any) {
        throw error;
      }
    },
  });
  return {
    coupons: coupons?.data?.data,
    isFetchingCoupons,
  };
};

export default useCouponQuery;
