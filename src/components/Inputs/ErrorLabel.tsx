import React from "react";
import { Text, View } from "react-native";

const ErrorLabel = ({ children }: any) => {
  return (
    <View>
      <View className={`absolute items-start`}>
        <Text className="px-1 text-red-500 font-bold text-lg">{children}</Text>
      </View>
    </View>
  );
};

export default ErrorLabel;
