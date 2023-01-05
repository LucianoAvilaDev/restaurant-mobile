import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "../../styles/main";
import { ModalHeader } from "./ModalHeader";

export const ModalTemplate = ({
  visible,
  setVisible,
  title,
  subtitle,
  children,
}: any) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View className="bg-black/50 flex-1 justify-center items-center">
        <Animatable.View
          animation={"slideInUp"}
          easing="ease-in-out"
          duration={300}
          className="bg-white w-[80vw] rounded-lg "
          style={styles.shadow}
        >
          <TouchableOpacity
            className="absolute w-full items-end z-10"
            onPress={() => setVisible(false)}
          >
            <View className="absolute w-full items-end z-10 p-2 rounded-full">
              <Icon name="close" size={20} color="white" />
            </View>
          </TouchableOpacity>

          <ModalHeader title={title} />
          {children}
        </Animatable.View>
      </View>
    </Modal>
  );
};
