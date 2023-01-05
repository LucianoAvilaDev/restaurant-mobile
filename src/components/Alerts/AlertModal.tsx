import { Button, Text } from "react-native";
import { ModalTemplate } from "../templates/ModalTemplate";

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
  type: string;
  text: string;
  title: string;
};

export const ModalError = ({
  modalVisible,
  setModalVisible,
  type,
  text,
  title,
}: any) => {
  <ModalTemplate visible={modalVisible} setVisible={setModalVisible}>
    <Text>"E-mail não encontrado!"</Text>
    <Button
      title="OK"
      onPress={() => {
        setModalVisible(false);
      }}
    />
  </ModalTemplate>;
};
