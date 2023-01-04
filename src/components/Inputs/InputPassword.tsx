import React from "react";
import { Text, TextInput, View } from "react-native";
import ErrorLabel from "./ErrorLabel";

type Props = {
  label: string;
  readonly?: boolean;
  placeholder?: string;
  register: any;
  errorMessage?: any;
  onChange?: Function;
  value?: any;
};

export const InputPassword = ({
  readonly,
  label,
  placeholder,
  register,
  errorMessage,
  onChange,
  value,
}: Props) => {
  return (
    <View className="space-y-2">
      <View>
        <Text
          className={`translate-y-2 shadow-sm shadow-white font-medium translate-x-1 transform-translate text-black z-10 text-lg`}
        >
          {label}
        </Text>
      </View>
      <View>
        <TextInput
          {...register}
          className="bg-white border-gray-300  border-2 p-2 rounded-lg text-lg"
          selectionColor={"rgb(230, 28, 28)"}
          cursorColor={"rgb(185, 28, 28)"}
          onChangeText={(text: string) => (onChange ? onChange(text) : null)}
          editable={!readonly}
          secureTextEntry={true}
          value={value}
          placeholder={placeholder}
        />
        {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
      </View>
    </View>
  );
};
