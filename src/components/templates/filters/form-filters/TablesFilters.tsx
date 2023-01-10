import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { SelectType } from "../../../../types/SelectType";
import { ButtonSolidSmall } from "../../../Buttons/ButtonSolidSmall";
import InputSelect from "../../../Inputs/InputSelect";
import { InputText } from "../../../Inputs/InputText";

type Props = {
  control: any;
  register: any;
  setValue: any;
  handleClear: any;
  handleSubmit: any;
  onSubmit: any;
};

export const TablesFilters = ({
  control,
  register,
  setValue,
  handleClear,
  handleSubmit,
  onSubmit,
}: any) => {
  const options: SelectType[] = [
    {
      key: "true",
      value: "Disponível",
    },
    {
      key: "false",
      value: "Indisponível",
    },
  ];

  return (
    <View>
      <View>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <View>
              <InputText
                register={register("number")}
                placeholder={"Pesquise pelo número..."}
                label={"Número"}
              />
            </View>
          )}
          name="number"
        />
      </View>
      <View>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <View>
              <InputSelect
                register={register("isAvailable")}
                name={"isAvailable"}
                placeholder={"Selecione a situação..."}
                label={"Situação"}
                options={options}
                setValue={setValue}
              />
            </View>
          )}
          name="number"
        />
      </View>

      <View
        className={`flex flex-row w-full pt-4 space-x-2 items-center justify-end`}
      >
        <View className="w-32">
          <ButtonSolidSmall
            label={"Pesquisar"}
            color={"secondary"}
            onPress={handleSubmit((data: any) => onSubmit(data))}
          />
        </View>
        <View className="w-32">
          <ButtonSolidSmall
            label={"Limpar"}
            color={"warning"}
            onPress={() => handleClear()}
          />
        </View>
      </View>
    </View>
  );
};
