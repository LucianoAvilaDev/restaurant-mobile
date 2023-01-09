import React from "react";
import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { styles } from "../../styles/main";
import ErrorLabel from "./ErrorLabel";

type props = {
  name: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder: string;
  label: string;
  register?: any;
  value?: any;
  options: { key: string; value: string }[];
  errorMessage?: any;
  setValue: any;
  onChange?: Function;
};

const InputSelect = ({
  name,
  readOnly,
  label,
  required,
  placeholder,
  register,
  options,
  errorMessage,
  value,
  setValue,
  onChange,
}: props) => {
  return (
    <View>
      {label && (
        <Text className={`text-gray-800 text-lg font-medium`}>{label}</Text>
      )}
      <SelectList
        placeholder={placeholder}
        styles={styles.shadow}
        {...register}
        searchPlaceholder="Pesquisar"
        searchicon={<></>}
        notFoundText="Nenhum valor"
        boxStyles={{
          height: 48,
          backgroundColor: "white",
          borderColor: "color: rgb(209 ,213 ,219 )",
          borderRadius: 8,
          ...styles.shadow,
        }}
        inputStyles={{
          fontSize: 18,
          left: -12,
          alignItems: "flex-start",
        }}
        dropdownTextStyles={{
          fontSize: 18,
          left: 0,
          alignItems: "flex-start",
        }}
        dropdownStyles={{
          ...styles.shadow,
          backgroundColor: "white",
          borderRadius: 8,
          top: -10,
          borderColor: "color: rgb(200 ,200 ,200 )",
        }}
        setSelected={(key: any) => {
          setValue(name, key);
          onChange ? onChange(key) : null;
        }}
        data={options}
        search={true}
        save="key"
        defaultOption={value}
      />

      {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </View>
  );
};

export default InputSelect;
