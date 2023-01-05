import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { styles } from "../../styles/main";

export const Checkbox = ({ label, readonly }: any) => {
  const [value, setValue] = useState(true);

  return (
    <View className={`flex flex-row items-center space-x-1`}>
      <Switch
        style={styles.shadow}
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
      <Text className={`font-medium text-lg`}>{label ?? "Habilitar"}</Text>
    </View>
  );
};
