import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, SafeAreaView, View } from "react-native";
import { ButtonSolid } from "../../components/Buttons/ButtonSolid";
import { InputEmail } from "../../components/Inputs/InputEmail";
import { PageHeader } from "../../components/templates/PageHeader";
import { RecoverSchema } from "../../schemas/RecoverSchema";

const Index = () => {
  const navigation = useNavigation();

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RecoverSchema()),
  });

  const onSubmit = (data: any) => {
    Alert.alert(data.email);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className={`flex-1 items-center bg-themeBgBody`}>
      <PageHeader
        title={"Recuperar senha"}
        subtitle={"Insira o e-mail pra receba o link!"}
      />

      <View className="flex-1 py-20 px-8 space-y-10  w-full justify-center ">
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
        <View className="flex-1 pt-8 w-full">
          <ButtonSolid
            label={"Enviar link"}
            color={"primary"}
            onPress={handleSubmit((data: any) => onSubmit(data))}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
