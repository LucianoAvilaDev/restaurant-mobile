import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, SafeAreaView, ScrollView, View } from "react-native";
import * as Animatable from "react-native-animatable";
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
import { styles } from "../../styles/main";

const Index = () => {
  const navigation: any = useNavigation();

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
      await signIn(data).then(() => {
        navigation.navigate(`Dashboard`);
      });
    } catch (e: any) {
      Alert.alert(JSON.stringify(e));
    }
  };

  return (
    <SafeAreaView className={`flex-1 bg-themeBgBody`}>
      <ModalTemplate
        title="Recuperar senha"
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <RecoverForm />
      </ModalTemplate>

      <PageHeader
        title={"Acessar conta"}
        subtitle={"Faça login na sua conta!"}
      />

      <ScrollView>
        <View className="flex-1 px-8 pt-12 justify-center space-y-4  w-full ">
          <Animatable.View
            animation={"flipInY"}
            delay={600}
            duration={500}
            easing={"ease-in-out"}
            className={`self-center rounded-full mb-4 w-36 h-36`}
            style={styles.shadow}
          >
            <Image
              source={require("../../assets/logo3.png")}
              className={`self-center rounded-full bg-gray-200 w-36 h-36`}
            />
          </Animatable.View>
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
          <View className="flex pt-6 items-center justify-between ">
            <Checkbox label={`Lembrar-me`} />
          </View>
          <View className="flex-1self-end pt-8 w-full">
            <ButtonSolid
              label={"Entrar"}
              color={"primary"}
              onPress={handleSubmit((data: any) => onSubmit(data))}
            />
            <View className="flex py-4 items-center">
              <LinkButton
                onPress={() => {
                  setModalVisible(true);
                }}
                label={`Esqueceu sua senha? Clique AQUI!`}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
