import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { ButtonSolid } from "../../components/Buttons/ButtonSolid";
import { AuthContext } from "../../contexts/AuthContext";

const Index = () => {
  const bg = "../../assets/foto.jpg";
  const logo = "../../assets/logo2.png";

  const navigation: any = useNavigation();

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <SafeAreaView className={`flex-1 w-full items-center`}>
      <Image source={require(bg)} className={`w-full h-full absolute`} />

      <Animatable.View
        animation="flipInY"
        delay={100}
        className="items-center "
      >
        <Text className="mt-20 text-white text-4xl font-semibold italic">
          Foods 'N' Drinks
        </Text>
        <Text className="text-white font-medium text-lg py-6 px-12 text-center">
          Gerencie o seu restaurante da palma da sua mão!
        </Text>
        <View className="py-2 items-center justify-center shadow">
          <Animatable.Image source={require(logo)} className={`w-44 h-44`} />
        </View>
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        easing={"ease"}
        delay={2000}
        iterationCount="infinite"
        className="flex-1 p-8 w-full space-y-4 justify-end "
      >
        {isAuthenticated ? (
          <ButtonSolid
            label={"Tela Principal"}
            color={"default"}
            onPress={() => {
              navigation.navigate(`Dashboard`);
            }}
          />
        ) : (
          <ButtonSolid
            label={"Acessar conta"}
            color={"default"}
            onPress={() => {
              navigation.navigate(`SignIn`);
            }}
          />
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Index;
