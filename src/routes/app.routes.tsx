import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import Recover from "../screens/Recover";

import SignIn from "../screens/SignIn";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View className="flex-1 bg-themeMedium justify-center items-center">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Recover"
        component={Recover}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
