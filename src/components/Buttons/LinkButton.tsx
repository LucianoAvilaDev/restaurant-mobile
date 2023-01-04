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
      className="py-4 active:opacity-50 px-2 text-lg font-bold"
    >
      {label}
    </Text>
  );
};
