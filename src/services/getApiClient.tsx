import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

export function getApiClient(ctx?: any) {
  const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
  });

  const storagedToken = AsyncStorage.getItem("@Restaurant:token");

  if (storagedToken)
    api.defaults.headers["Authorization"] = `bearer ${storagedToken}`;

  return api;
}
