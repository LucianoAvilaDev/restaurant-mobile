import { useRef } from "react";
import { DrawerLayoutAndroid, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { DrawerMenu } from "../Drawer/DrawerMenu";

export const Drawer = ({ children }: any) => {
  const drawer = useRef<any>();

  const navigationView = () => <DrawerMenu drawer={drawer} />;

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"right"}
      renderNavigationView={navigationView}
    >
      <TouchableHighlight
        underlayColor={"rgba(200 ,200, 200 , 0.7)"}
        className="z-20 rounded-full top-3 items-center bg-transparent w-10 p-2 right-1 absolute"
        onPress={() => drawer.current.openDrawer()}
      >
        <View className="rounded-full items-center">
          <Icon name="dots-three-vertical" color="white" size={22} />
        </View>
      </TouchableHighlight>

      {children}
    </DrawerLayoutAndroid>
  );
};
