import React from "react";
import { TouchableHighlight, View } from "react-native";
import { GetStyleByColorNameOutlined } from "../../utils/GetStyleByColorNameOutlined";

type Props = {
  color:
    | "primary"
    | "secondary"
    | "default"
    | "info"
    | "success"
    | "warning"
    | "danger";
  type?: "submit";
  icon?: any;
  onPress?: Function;
};

export const TableButtonSolid = ({ color, icon, onPress }: Props) => {
  const styleButton: string = GetStyleByColorNameOutlined(color);

  return (
    <TouchableHighlight
      onPress={() => {
        onPress ? onPress() : null;
      }}
    >
      <View
        className={`${styleButton} items-center flex justify-center p-1 text-sm font-medium shadow-gray-300 hover:shadow-gray-500 `}
      >
        {icon}
      </View>
    </TouchableHighlight>
  );
};
