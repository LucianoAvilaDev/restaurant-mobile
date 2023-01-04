import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, SafeAreaView, View } from "react-native";
import { ButtonSolid } from "../../components/Buttons/ButtonSolid";
import { LinkButton } from "../../components/Buttons/LinkButton";
import { Checkbox } from "../../components/Inputs/Checkbox";
import { InputEmail } from "../../components/Inputs/InputEmail";
import { InputPassword } from "../../components/Inputs/InputPassword";
import { RecoverForm } from "../../components/templates/forms/RecoverForm";
import { ModalTemplate } from "../../components/templates/ModalTemplate";
import { PageHeader } from "../../components/templates/PageHeader";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginSchema } from "../../schemas/LoginSchema";

const Index = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext);

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema()),
  });

  const onSubmit = async (data: any) => {
    try {
      await signIn(data).then(async () => {
        const user: any = await AsyncStorage.getItem("@Restaurant:user");
        Alert.alert(user ?? "");
      });
    } catch (e: any) {
      Alert.alert(JSON.stringify(e));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className={`flex-1 items-center bg-themeBgBody`}>
      <ModalTemplate visible={modalVisible} setVisible={setModalVisible}>
        <RecoverForm />
      </ModalTemplate>

      <PageHeader
        title={"Acessar conta"}
        subtitle={"Faça login na sua conta!"}
      />

      <View className="flex-1 pt-16 px-8 space-y-5  w-full ">
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
        <View className="flex pt-8 items-center justify-between ">
          <Checkbox label={`Lembrar-me`} />
        </View>
        <View className="flex-1 pt-8 w-full">
          <ButtonSolid
            label={"Entrar"}
            color={"primary"}
            onPress={handleSubmit((data: any) => onSubmit(data))}
          />
          <View className="flex py-4 items-center">
            <LinkButton
              onPress={() => {
                setModalVisible(true);
                // navigation.navigate("Recover");
              }}
              label={`Esqueceu sua senha? Clique AQUI!`}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
