import { Text, View } from "react-native";
import { styles } from "../../styles/main";

type Props = {
  title: string;
  children: any;
};

export const InnerCard = ({ title, children }: Props) => {
  return (
    <>
      <View
        style={styles.shadow}
        className="h-max w-full border border-gray-200 bg-white rounded-lg "
      >
        <View
          className={`flex mx-2 items-center border-b border-gray-200 justify-center`}
        >
          <Text className="p-2 antialiased w-full text-start text-base font-medium text-gray-900">
            {title}
          </Text>
        </View>
        <Text className={`px-4`}>{children}</Text>
      </View>
    </>
  );
};
