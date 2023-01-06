import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
};

export const ModalHeader = ({ title }: Props) => {
  return (
    <>
      <View className="flex items-center px-4 rounded-t-md bg-themeDarker">
        <Text className="text-white font-semibold text-xl py-4">{title}</Text>
      </View>
    </>
  );
};
