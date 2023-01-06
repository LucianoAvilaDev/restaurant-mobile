import React from "react";
import { Text } from "react-native";

export const LongText = ({ style, children }: any) => {
  const Truncate = (text: string) =>
    text.length > 30 ? `${text.substr(0, 29)}...` : text;

  return <Text style={style}>{Truncate(children)}</Text>;
};
