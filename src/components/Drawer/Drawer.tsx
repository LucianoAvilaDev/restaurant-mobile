import { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, View } from "react-native";

export const Drawer = ({ children }: any) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState<
    "left" | "right" | undefined
  >("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View className={`flex-1 items-center p-16 justify-center bg-[#ecf0f1]`}>
      <Text className={`bg-green-500 text-center`}>{children}</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View className={`flex-1 items-center p-16 justify-center bg-[#ecf0f1]`}>
        <Text>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text className={`p-16 text-center`}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};
