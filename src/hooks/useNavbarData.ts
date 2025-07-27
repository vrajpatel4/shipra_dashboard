// src/hooks/useNavbarData.ts

import { fetchNavbarDetails } from "@/services/navbar";
import { useQuery } from "@tanstack/react-query";

export const useNavbarData = () => {
  return useQuery({
    queryKey: ["navbarData"],
    queryFn: fetchNavbarDetails,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
