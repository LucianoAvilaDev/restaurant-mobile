import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, SafeAreaView, ScrollView, View } from "react-native";
import { ButtonSolid } from "../../components/Buttons/ButtonSolid";
import { Checkbox } from "../../components/Inputs/Checkbox";
import { InputEmail } from "../../components/Inputs/InputEmail";
import { InputPassword } from "../../components/Inputs/InputPassword";
import { PageHeader } from "../../components/templates/PageHeader";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginSchema } from "../../schemas/LoginSchema";

const Index = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { signIn, signOut, setIsLoading } = useContext(AuthContext);

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema()),
  });

  setIsLoading(false);

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

  return (
    <SafeAreaView className={`flex-1 bg-themeBgBody`}>
      <PageHeader
        title={"Tela Principal"}
        subtitle={"Gerencie os pedidos de hoje!"}
      />

      <ScrollView>
        <View className="flex-1 px-8 py-12 justify-center space-y-4  w-full ">
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
            <ButtonSolid label={"Sair"} color={"primary"} onPress={signOut} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
