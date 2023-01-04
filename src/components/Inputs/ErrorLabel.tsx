import React from "react";
import { Text, View } from "react-native";

const ErrorLabel = ({ children }: any) => {
  return (
    <View>
      <View className={`absolute items-start`}>
        <Text className="left-2 text-red-500 font-normal text-base">
          {children}
        </Text>
      </View>
    </View>
  );
};

export default ErrorLabel;
