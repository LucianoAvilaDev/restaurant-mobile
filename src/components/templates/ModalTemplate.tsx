import React from "react";
import { Modal, TouchableHighlight, View } from "react-native";
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
          className="bg-white w-[80vw] rounded-md "
          style={styles.shadow}
        >
          <TouchableHighlight
            underlayColor={"rgba(200 ,200, 200 , 0.7)"}
            className="z-20 rounded-full items-center bg-transparent w-8 p-1 top-1 right-1 absolute"
            onPress={() => setVisible(false)}
          >
            <View className="rounded-full items-center">
              <Icon name="close" size={22} color="white" />
            </View>
          </TouchableHighlight>

          <ModalHeader title={title} />
          {children}
        </Animatable.View>
      </View>
    </Modal>
  );
};
