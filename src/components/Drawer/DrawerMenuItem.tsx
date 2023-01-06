import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  Alert,
  BackHandler,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../contexts/AuthContext";
import { MenuType } from "../../types/MenuType";

type Props = {
  item: MenuType;
  drawer: any;
};

const handleExit = () => {
  Alert.alert("Fechar aplicativo", "Deseja realmente fechar o aplicativo?", [
    {
      text: "Cancelar",
    },
    { text: "OK", onPress: () => BackHandler.exitApp() },
  ]);
};

const handleLogout = (signOut: Function) => {
  Alert.alert("Sair da conta", "Deseja realmente sair da sua conta?", [
    {
      text: "Cancelar",
    },
    { text: "OK", onPress: () => signOut() },
  ]);
};

export const SingleItem = ({ item, drawer }: Props) => {
  const { signOut } = useContext(AuthContext);
  const navigation: any = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={"rgba(200 ,28, 28 , 0.7)"}
      onPress={() => {
        switch (item.screen) {
          case "exit":
            handleExit();
            drawer.current.closeDrawer();
            break;
          case "logout":
            handleLogout(signOut);

            drawer.current.closeDrawer();
            break;
          default:
            navigation.navigate(item.screen);
            drawer.current.closeDrawer();
        }
      }}
    >
      <View className="flex flex-row px-4 py-6 items-center space-x-6">
        {item.icon}
        <Text className="text-white font-normal text-base">{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export const MultiItem = ({ item, drawer }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <View>
      <TouchableHighlight
        underlayColor={"rgba(200 ,28, 28 , 0.7)"}
        onPress={() => {
          setOpen(!open);
        }}
      >
        <View className="flex flex-row px-4 py-6 items-center space-x-6">
          {item.icon}
          <Text className="text-white font-normal text-base">{item.name}</Text>
          <Text>
            <Icon
              name={open ? "chevron-up" : "chevron-down"}
              color="white"
              size={20}
            />
          </Text>
        </View>
      </TouchableHighlight>

      {open && (
        <View
          className={`${
            open ? "scale-100" : "scale-0"
          } transition-transform origin-top duration-100`}
        >
          {item.submenus.map((item: MenuType) => {
            if (item.submenus.length == 0)
              return (
                <View key={`${uuid.v4()}`} className="bg-black/20">
                  <SingleItem drawer={drawer} item={item} />
                </View>
              );

            return (
              <View key={`${uuid.v4()}`} className="bg-black/20">
                <MultiItem drawer={drawer} item={item} />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};
