import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../../assets/logo2.png";

type Props = {
  title: string;
  subtitle: string;
};

export const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <View className="absolute w-full h-48 px-4 bg-themeDarker"></View>

      <View className="flex items-center py-6 px-5 w-full rounded-b-full bg-themeMedium">
        <Text className="text-white text-4xl pt-4">{title}</Text>
        <Text className="text-white text-base font-light pt-2 pb-6 text-center">
          {subtitle}
        </Text>
        <Image source={logo} className={`w-20 h-20`} />
      </View>
    </>
  );
};
