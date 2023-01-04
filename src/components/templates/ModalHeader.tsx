import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export const ModalHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <View className="flex items-center px-4 rounded-t-2xl bg-themeDarker">
        <Text className="text-white text-2xl py-4">{title}</Text>
      </View>
    </>
  );
};
