import { ServiceV1_Common } from "@/lib/api";
import { TNavbarDataResponse } from "@/types/navbar";

export const fetchNavbarDetails = async (): Promise<TNavbarDataResponse> => {
  const { data } = await ServiceV1_Common.get("/admin/ticker/unauth/info"); // ← Your endpoint here
  return data;
};
