import { useQuery } from "@tanstack/react-query";

import axiosClient from "@/services/axiosClient";

const useLocationQuery = (country: string) => {
  const { data: states, isLoading: isGettingStates } = useQuery({
    queryKey: ["state", country],
    queryFn: async () => {
      try {
        const response = await axiosClient.get(
          `https://api.countrystatecity.in/v1/countries/${country}/states`
        );
        return response as unknown as {
          id: string;
          name: string;
          iso2: string;
        }[];
      } catch (error) {
        throw error;
      }
    },
  });
  return {
    states,
    isGettingStates,
  };
};

export default useLocationQuery;
