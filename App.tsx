import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor={`rgb(185, 28, 28)`}
          animated
          barStyle={"light-content"}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
