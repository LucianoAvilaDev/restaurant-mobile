import React from "react";
import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "../../styles/main";
type Props = {
  title: string;
  subtitle: string;
};

export const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <View className="absolute w-full h-24 px-4 bg-themeDarker"></View>

      <Animatable.View
        animation="slideInRight"
        easing="ease-out"
        duration={500}
        delay={400}
        style={styles.shadow}
        className="flex items-end py-2 px-8 w-full rounded-bl-full bg-themeMedium"
      >
        <Text className="text-white text-4xl py-1">{title}</Text>
        <Text className="text-white text-base font-light pb-6 text-center">
          {subtitle}
        </Text>
      </Animatable.View>
    </>
  );
};
