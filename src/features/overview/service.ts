import { ServiceV1_Common } from "@/lib/api";
import {
  OverviewApiResponse,
  HighLowApiResponse,
  MovingAverageApiResponse,
  ChartApiResponse,
} from "../../types/overview";

export const fetchOverViewDetails = async (): Promise<OverviewApiResponse> => {
  const { data } = await ServiceV1_Common.get("/admin/ticker/unauth/overview");
  return data;
};

export const fetchOverViewHighLowDetails =
  async (): Promise<HighLowApiResponse> => {
    const { data } = await ServiceV1_Common.get(
      "/admin/ticker/unauth/trading-high-low"
    );
    return data;
  };

export const fetchOverViewMovingAvarageDetails =
  async (): Promise<MovingAverageApiResponse> => {
    const { data } = await ServiceV1_Common.get(
      "/admin/ticker/unauth/moving-average"
    );
    return data;
  };

export const fetchOverViewChartDetails =
  async (): Promise<ChartApiResponse> => {
    const { data } = await ServiceV1_Common.get(
      "/admin/ticker/unauth/closing-prices"
    );
    return data;
  };
