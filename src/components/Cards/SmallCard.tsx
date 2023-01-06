import { Text, View } from "react-native";
import { styles } from "../../styles/main";
import { CardType } from "../../types/CardType";

const SmallCard = ({ title, value }: CardType) => {
  return (
    <View className="flex justify-center w-full">
      <View
        style={styles.shadow}
        className={`bg-themeMedium flex-row  flex rounded-md p-2 justify-between items-center space-x-2 w-full`}
      >
        <Text className=" text-white text-base font-semibold">{title}</Text>
        <Text className="font-bold text-white self-end text-lg">{value}</Text>
      </View>
    </View>
  );
};

export default SmallCard;
