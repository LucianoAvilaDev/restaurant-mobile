import React from "react";
import { Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { LongText } from "../../Labels/LongText";
import { styles } from "../../styles/main";
type Props = {
  title: string;
  subtitle: string;
};

export const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <Animatable.View
        animation="fadeInLeftBig"
        delay={200}
        duration={500}
        easing="ease-in-out"
        className="absolute items-center h-28 rounded-r-full w-full bg-themeDarker"
      />

      <Animatable.View
        animation="slideInDown"
        easing="ease-in-out"
        duration={500}
        delay={300}
        style={styles.shadow}
        className="flex items-start rounded-bl-full left-4 space-y-1 py-4 px-10 w-auto bg-themeMedium"
      >
        <Text className="text-white text-3xl">{title}</Text>
        <LongText className="text-white font-light left-7 text-base">
          {subtitle}
        </LongText>
      </Animatable.View>
    </>
  );
};
