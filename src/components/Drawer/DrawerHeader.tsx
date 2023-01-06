import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../../styles/main";

export const DrawerHeader = () => {
  return (
    <View
      style={styles.shadow}
      className={
        "border-b  bg-themeMedium border-white w-full items-center py-2"
      }
    >
      <View className={`text-center justify-center`}>
        <View className="flex flex-row space-x-2">
          <Text className="text-white self-center text-2xl font-semibold italic">
            Foods
          </Text>
          <View className="py-4 items-center justify-center shadow">
            <Image
              source={require("../../assets/logo2.png")}
              className={`w-16 h-16`}
            />
          </View>
          <Text className="text-white self-center text-2xl font-semibold italic">
            Drinks
          </Text>
        </View>
      </View>
    </View>
  );
};
