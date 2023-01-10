import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "../../../styles/main";

export const FilterTemplate = ({ children }: any) => {
  const [animation, setAnimation] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <View>
      <View>
        {/* --------- TITULO E BOTAO PRA EXIBIR/OCULTAR FILTROS--------------- */}
        <View className="flex justify-start items-start space-x-2">
          <View className="flex flex-row pt-3 pb-1 items-center ">
            <Text className="text-lg font-semibold">Filtros</Text>
            <TouchableHighlight
              className="rounded-full p-2"
              underlayColor={"rgba(200 ,200, 200 , 0.7)"}
              onPress={() => {
                if (open) {
                  setAnimation("fadeOutLeft");
                  setTimeout(() => {
                    setOpen(false);
                  }, 280);
                } else {
                  setOpen(true);
                  setAnimation("fadeInLeft");
                }
              }}
            >
              <View
                className={`${
                  open ? "rotate-180" : "rotate-0"
                } transition-transform`}
              >
                <Icon color="black" size={14} name="chevron-down" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {/* --------------------------------------------------------------------- */}

        {/* --------- VIEW DE FILTROS ------------------------------------------- */}
        {open && (
          <Animatable.View
            animation={animation}
            duration={300}
            style={styles.shadow}
            className="bg-gray-100 border-gray-300 mb-4 rounded-md p-4 space-y-2"
          >
            {children}
          </Animatable.View>
        )}
      </View>
    </View>
  );
};
