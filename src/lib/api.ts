import axios from "axios";

export const ServiceV1_Common = axios.create({
  baseURL: "https://api-shipra-v3.pilleo.ca/",
  headers: {
    Accept: "application/json",
  },
});
