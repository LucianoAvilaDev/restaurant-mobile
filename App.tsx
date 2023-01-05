import { ToastContainer } from "@jamsch/react-native-toastify";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/contexts/AuthContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider>
          <StatusBar
            backgroundColor={`rgb(185, 28, 28)`}
            animated
            barStyle={"light-content"}
          />
          <Routes />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
