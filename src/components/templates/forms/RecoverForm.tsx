import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { RecoverSchema } from "../../../schemas/RecoverSchema";
import { api } from "../../../services/api";
import { ButtonSolid } from "../../Buttons/ButtonSolid";
import { InputEmail } from "../../Inputs/InputEmail";

export const RecoverForm = () => {
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
    api
      .post("recovery", data)
      .then(() => {
        return;
      })
      .catch(async (e: AxiosError) => {
        if (e.response?.status == 400) {
          Alert.alert(
            "E-mail não encontrado!",
            "Verifique se o e-mail digitado está correto"
          );
        }
      });
  };

  return (
    <View className="flex p-4 w-full justify-center ">
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
      <View className="pt-8 pb-1">
        <ButtonSolid
          label={"Enviar link"}
          color={"primary"}
          onPress={handleSubmit((data: any) => onSubmit(data))}
        />
      </View>
    </View>
  );
};
