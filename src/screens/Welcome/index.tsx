import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import * as Animatable from "react-native-animatable";
import bg from "../../assets/foto.jpg";
import logo from "../../assets/logo2.png";
import { ButtonSolid } from "../../components/Buttons/ButtonSolid";

const Index = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className={`flex-1 w-full items-center`}>
      <Image source={bg} className={`w-full h-full absolute`} />

      <View className="items-center ">
        <Animatable.Text
          animation="fadeInDown"
          easing="ease-in-out"
          className="mt-20 text-white text-4xl font-semibold italic"
        >
          Foods 'N' Drinks
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInDown"
          easing="ease-in-out"
          className="text-white font-medium text-lg py-6 px-12 text-center"
        >
          Gerencie o seu restaurante da palma da sua mão!
        </Animatable.Text>
        <Animatable.View
          animation="fadeInDown"
          easing="ease-in-out"
          className="py-2 items-center justify-center shadow"
        >
          <Animatable.Image source={logo} className={`w-44 h-44`} />
        </Animatable.View>
      </View>
      <View className="flex-1 p-8 w-full justify-end ">
        <ButtonSolid
          label={"Realizar Login"}
          color={"default"}
          onPress={() => {
            navigation.navigate(`SignIn`);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
