import { StyleSheet } from "react-native";
import { Drawer } from "../components/Drawer/Drawer";

export function Home() {
  return <Drawer>Conteudo teste</Drawer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
