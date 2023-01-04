import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/main";
import { GetStyleByColorName } from "../../utils/GetStyleByColorName";

type Props = {
  label: string;
  color:
    | "primary"
    | "secondary"
    | "default"
    | "info"
    | "success"
    | "warning"
    | "danger";
  type?: "submit";
  onPress?: Function;
};

export const ButtonSolid = ({ label, color, type, onPress }: Props) => {
  const styleButton: string = GetStyleByColorName(color);

  return (
    <TouchableOpacity
      className="border-transparent active:opacity-70"
      onPress={async () => {
        onPress ? await onPress() : null;
      }}
    >
      <Text
        style={styles.shadow}
        className={`${styleButton} shadow text-center font-semibold text-xl tracking-widest p-3 rounded-full`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
