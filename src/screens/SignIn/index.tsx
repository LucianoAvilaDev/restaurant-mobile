import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import logo from "../../assets/logo2.png";
import { ButtonSolid } from "../../components/Buttons/ButtonSolid";
import { LinkButton } from "../../components/Buttons/LinkButton";
import { Checkbox } from "../../components/Inputs/Checkbox";
import { InputEmail } from "../../components/Inputs/InputEmail";
import { InputPassword } from "../../components/Inputs/InputPassword";
import { LoginSchema } from "../../schemas/LoginSchema";

const Index = () => {
  const navigation = useNavigation();

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema()),
  });

  const onSubmit = (data: any) => {
    Alert.alert(data.email, data.password);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className={`flex-1 items-center bg-themeBgBody`}>
      <View className="absolute w-full h-48 items-end px-4 bg-themeDarker"></View>

      <Animatable.View
        animation="slideInDown"
        className="flex items-end py-4 px-5 w-full rounded-bl-full bg-themeMedium"
      >
        <Image source={logo} className={`w-20 h-20`} />

        <Text className="text-white text-4xl pt-4">Acessar conta</Text>
        <Text className="text-white text-base font-light pt-2 pb-6 text-center">
          Faça login na sua conta!
        </Text>
      </Animatable.View>

      <View className="flex-1 pt-16 px-8 space-y-6  w-full justify- ">
        <View>
          <Controller
            control={control}
            render={({ field: { onBlur, value } }) => (
              <View>
                <InputEmail
                  register={register("email")}
                  onChange={(text: string) => setValue("email", text)}
                  onBlur={onBlur}
                  value={value}
                  label="E-mail"
                  placeholder="Digite o E-mail..."
                  errorMessage={errors?.email?.message}
                />
              </View>
            )}
            name="email"
          />
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onBlur, value } }) => (
              <View>
                <InputPassword
                  register={register("password")}
                  onChange={(text: string) => setValue("password", text)}
                  value={value}
                  label="Senha"
                  placeholder="Digite a Senha..."
                  errorMessage={errors?.password?.message}
                />
              </View>
            )}
            name="password"
          />
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
          <ButtonSolid
            label={"Entrar"}
            color={"primary"}
            onPress={handleSubmit((data: any) => onSubmit(data))}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
