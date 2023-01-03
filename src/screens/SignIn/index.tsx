import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, SafeAreaView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import logo from "../../assets/logo2.png";
import { ButtonSolid } from "../../components/Buttons/ButtonSolid";
import { LinkButton } from "../../components/Buttons/LinkButton";
import { Checkbox } from "../../components/Inputs/Checkbox";
import { InputPassword } from "../../components/Inputs/InputPassword";
import { InputText } from "../../components/Inputs/InputText";

const Index = () => {
  const navigation = useNavigation();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className={`flex-1 items-center bg-themeBgBody`}>
      <View className="absolute w-full h-48 items-end px-4 bg-themeDarker"></View>

      <View className="flex items-end py-4 px-5 w-full rounded-bl-full bg-themeMedium">
        <Animatable.Image
          animation="fadeInDown"
          easing="ease-in-out"
          source={logo}
          className={`w-20 h-20`}
        />

        <Animatable.Text
          animation="fadeInDown"
          easing="ease-in-out"
          className="text-white text-4xl pt-4"
        >
          Acessar conta
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInDown"
          easing="ease-in-out"
          className="text-white text-base font-light pt-2 pb-6 text-center"
        >
          Faça login na sua conta!
        </Animatable.Text>
      </View>

      <View className="flex-1 pt-16 px-8 space-y-6  w-full justify- ">
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <InputText
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  label="E-mail"
                  placeholder="Digite o E-mail..."
                />
              </View>
            )}
            name="email"
          />
          {errors.email && <Text>Campo obrigatório.</Text>}
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <InputPassword
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  label="Senha"
                  placeholder="Digite o Senha..."
                />
              </View>
            )}
            name="password"
          />
          {errors.password && <Text>Limite 100 caracteres.</Text>}
        </View>
        <View className="flex flex-row py-2 items-center justify-between ">
          <View>
            <Checkbox label={`Lembrar-me`} />
          </View>
          <View>
            <LinkButton
              onPress={() => {
                Alert.alert("Email com recuperação enviado!");
              }}
              label={`Recuperar senha`}
            />
          </View>
        </View>
        <View className="flex-1 py-8 w-full justify-end ">
          <ButtonSolid label={"Entrar"} color={"primary"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
