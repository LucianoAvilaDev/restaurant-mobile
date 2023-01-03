import React from "react";
import { Text } from "react-native";

type Props = {
  label: string;
  onPress?: Function;
};

export const LinkButton = ({ label, onPress }: Props) => {
  return (
    <Text
      onPress={() => {
        onPress ? onPress() : null;
      }}
      className="py-4 px-2 text-base font-bold self-end"
    >
      {label}
    </Text>
  );
};
