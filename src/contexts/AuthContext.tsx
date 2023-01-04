import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AuthContextType } from "../types/AuthContextType";
import { SignInType } from "../types/SignInType";

type UserType = {
  id: string | number;
  name: string;
  email: string;
  permissions: string[];
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<UserType | null>(null);
  const [ref, setRef] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const loadData = async () => {
      const storagedUser = await AsyncStorage.getItem("@Restaurant:user");
      const storagedToken = await AsyncStorage.getItem("@Restaurant:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    };

    loadData().then(() => {
      setIsLoading(false);
    });
  }, []);

  const signIn = async (data: SignInType) => {
    const { token, user } = await api
      .post("login", {
        ...data,
      })
      .then((response: AxiosResponse) => response.data);

    await AsyncStorage.setItem("@Restaurant:user", JSON.stringify(user));
    await AsyncStorage.setItem("@Restaurant:token", token);

    api.defaults.headers["Authorization"] = `bearer ${token}`;

    setUser(user);
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
