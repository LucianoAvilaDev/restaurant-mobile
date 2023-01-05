import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
};

export const ModalHeader = ({ title }: Props) => {
  return (
    <>
      <View className="flex items-center px-4 rounded-t-lg bg-themeDarker">
        <Text className="text-white text-2xl py-4">{title}</Text>
      </View>
    </>
  );
};
