import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

export const Checkbox = ({ label, readonly }: any) => {
  const [value, setValue] = useState(true);

  return (
    <View className={`flex flex-row items-center space-x-1`}>
      <Switch
        trackColor={{ false: "#767577", true: "rgb(153, 27, 27)" }}
        thumbColor={
          readonly
            ? value
              ? "#f4f3f4"
              : "#d0d0d0"
            : value
            ? "#fff"
            : "#f4f3f4"
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setValue(!value)}
        value={value}
      />
      <Text className={`font-bold text-base`}>{label ?? "Habilitar"}</Text>
    </View>
  );
};
