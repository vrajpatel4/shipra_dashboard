import { ServiceV1_Common } from "@/lib/api";
import { NavbarDataResponse } from "@/types/navbar";

export const fetchNavbarDetails = async (): Promise<NavbarDataResponse> => {
  const { data } = await ServiceV1_Common.get("/admin/ticker/unauth/info"); // ← Your endpoint here
  return data;
};
