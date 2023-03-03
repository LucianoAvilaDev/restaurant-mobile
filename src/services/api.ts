import { API_URL } from "@env";
import axios, { AxiosInstance } from "axios";

export function api(token?: string|null) {
  const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
  });

  if (token)
    api.defaults.headers["Authorization"] = `bearer ${token}`;

  return api;
}
