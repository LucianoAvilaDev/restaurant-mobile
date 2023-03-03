import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError, AxiosResponse } from "axios";
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
  const [token, setToken] = useState<string | null>(null);
  const [ref, setRef] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isAuthenticated = !!user || !!token;

  useEffect(() => {
    if (!CheckInternetConnection()) {
      Alert.alert(
        `Falha na Conexão`,
        "Verifique a sua conexão com a internet!"
      );
      return;
    }
    const loadData = async () => {
      if (user && token) {
        setUser(user)
        setToken(token)
      }
    };

    loadData().then(() => {
      setIsLoading(false);
    });
  }, []);

  const signIn = async (data: SignInType) => {
    await AsyncStorage.setItem("@Restaurant:token", 'piu');

    const { token, user }: any = await api()
      .post("login", {
        ...data,
      })
      .then((response: AxiosResponse) => response.data)
      .catch((e: AxiosError) => console.log(e));

    await AsyncStorage.setItem("@Restaurant:user", JSON.stringify(user));
    await AsyncStorage.setItem("@Restaurant:token", token);

    setUser(user as LoggedUserType);
    setToken(token);
  };

  const signOut = async () => {
    AsyncStorage.clear().then(() => {
      setToken(null);
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
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
