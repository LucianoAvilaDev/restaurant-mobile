import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { Drawer } from "../components/Drawer/Drawer";
import { AuthContext } from "../contexts/AuthContext";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const { isAuthenticated, user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View className="flex-1 bg-themeMedium justify-center items-center">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  return <Drawer>{isAuthenticated ? <AuthRoutes /> : <AppRoutes />}</Drawer>;
}
