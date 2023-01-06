import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { api } from "../services/api";
import { AuthContextType } from "../types/AuthContextType";
import { LoggedUserType } from "../types/LoggedUserType";
import { SignInType } from "../types/SignInType";
import { CheckInternetConnection } from "../utils/CheckInternetConnection";

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<LoggedUserType | null>(null);
  const [ref, setRef] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    if (!CheckInternetConnection()) {
      Alert.alert(
        `Falha na Conexão`,
        "Verifique a sua conexão com a internet!"
      );
      return;
    }
    const loadData = async () => {
      const storagedUser = await AsyncStorage.getItem("@Restaurant:user");
      const storagedToken = await AsyncStorage.getItem("@Restaurant:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers["Authorization"] = `bearer ${storagedToken}`;
      }
    };

    loadData().then(() => {
      setIsLoading(false);
    });
  }, []);

  const signIn = async (data: SignInType) => {
    const { token, user }: any = await api
      .post("login", {
        ...data,
      })
      .then((response: AxiosResponse) => response.data);

    await AsyncStorage.setItem("@Restaurant:user", JSON.stringify(user));
    await AsyncStorage.setItem("@Restaurant:token", token);

    api.defaults.headers["Authorization"] = `bearer ${token}`;

    setUser(user as LoggedUserType);
  };

  const signOut = async () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        ref,
        setRef,
        isLoading,
        setIsLoading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
