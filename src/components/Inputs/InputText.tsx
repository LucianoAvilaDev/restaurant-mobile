import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  onBlur: any;
  onChange: Function;
  value: any;
  readonly?: boolean;
  placeholder?: string;
};

export const InputText = ({
  onBlur,
  readonly,
  onChange,
  value,
  label,
  placeholder,
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
          className="bg-white border-gray-300 border-2 p-2 rounded-lg text-lg"
          selectionColor={"rgb(230, 28, 28)"}
          cursorColor={"rgb(185, 28, 28)"}
          editable={!readonly}
          onBlur={onBlur}
          onChangeText={() => {
            onChange ? onChange() : null;
          }}
          value={value}
          selectTextOnFocus
          placeholder={placeholder ?? ""}
        />
      </View>
    </View>
  );
};