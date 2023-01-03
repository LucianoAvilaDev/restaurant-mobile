import React from "react";
import { Text, TouchableOpacity } from "react-native";
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
      className="border-transparent active:p-2"
      onPress={async () => {
        onPress ? await onPress() : null;
      }}
    >
      <Text
        className={`${styleButton} shadow text-center font-bold text-xl p-3 rounded-2xl`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
