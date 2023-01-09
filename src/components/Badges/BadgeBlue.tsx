import { Text, View } from "react-native";

type Props = {
  text: string;
};

const BadgeBlue = ({ text }: Props) => {
  return (
    <View className={`bg-blue-500 flex  rounded-lg py-1 px-2`}>
      <Text className={`uppercase font-bold text-white text-xs`}>{text}</Text>
    </View>
  );
};

export default BadgeBlue;
