import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import Dashboard from "../screens/Dashboard";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
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
        animationDuration: 100,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
