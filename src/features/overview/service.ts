import { ServiceV1_Common } from "@/lib/api";
import {
  TfetchOverViewDetailsResponse,
  TfetchOverViewHighLowDetailsResponse,
  TfetchOverViewMovingAvarageDetailsResponse,
} from "./type";

export const fetchOverViewDetails =
  async (): Promise<TfetchOverViewDetailsResponse> => {
    const { data } = await ServiceV1_Common.get(
      "/admin/ticker/unauth/overview"
    );
    return data;
  };

export const fetchOverViewHighLowDetails =
  async (): Promise<TfetchOverViewHighLowDetailsResponse> => {
    const { data } = await ServiceV1_Common.get(
      "/admin/ticker/unauth/trading-high-low"
    );
    return data;
  };

export const fetchOverViewMovingAvarageDetails =
  async (): Promise<TfetchOverViewMovingAvarageDetailsResponse> => {
    const { data } = await ServiceV1_Common.get(
      "/admin/ticker/unauth/moving-average"
    );
    return data;
  };

export const fetchOverViewChartDetails =
  async (): Promise<TfetchOverViewMovingAvarageDetailsResponse> => {
    const { data } = await ServiceV1_Common.get(
      "/admin/ticker/unauth/closing-prices"
    );
    return data;
  };
