// src/hooks/useNavbarData.ts

import { fetchNavbarDetails } from "@/services/navbar";
import { useQuery } from "@tanstack/react-query";
import { fetchOverViewChartDetails, fetchOverViewDetails, fetchOverViewHighLowDetails, fetchOverViewMovingAvarageDetails } from "../service";

export const useOverViewData = () => {
  return useQuery({
    queryKey: ["overViewData"],
    queryFn: fetchOverViewDetails,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useOverViewHighLowData = () => {
  return useQuery({
    queryKey: ["overViewHighLowData"],
    queryFn: fetchOverViewHighLowDetails,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useOverViewMovingAvarageData = () => {
  return useQuery({
    queryKey: ["overViewMovingAvarageData"],
    queryFn: fetchOverViewMovingAvarageDetails,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useOverViewChartData = () => {
  return useQuery({
    queryKey: ["overViewChartData"],
    queryFn: fetchOverViewChartDetails,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
