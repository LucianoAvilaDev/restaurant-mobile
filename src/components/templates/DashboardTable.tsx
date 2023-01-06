import { Text, TouchableHighlight, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "../../styles/main";

const DashboardTable = ({ table, ...props }: any) => {
  return (
    <TouchableHighlight
      underlayColor={"rgba(200 ,200, 200 , 0.0)"}
      className="border-transparent active:opacity-80"
    >
      <View className={`col-span-4 py-3 cursor-pointer`}>
        <View
          style={styles.shadow}
          className="absolute bottom-1 left-3 bg-gray-200 flex flex-col border-2 border-gray-300 items-center shadow-lg text-xs font-medium text-center py-2 rounded-md w-4 h-6"
        ></View>
        <View
          style={styles.shadow}
          className="absolute bottom-1 right-3 bg-gray-200 flex flex-col border-2 border-gray-300 items-center shadow-lg text-xs font-medium text-center py-2 rounded-md w-4 h-6"
        ></View>

        <View
          style={styles.shadow}
          className={`bg-gray-200 flex flex-col border-2 border-gray-300 items-center shadow-lg text-xs font-medium text-center py-2 rounded-2xl w-36 h-20`}
          {...props}
        >
          <Text
            className={`${
              table.is_available ? " text-green-600" : "text-red-500 "
            }
         font-bold text-2xl`}
          >
            {table.number}
          </Text>
          <Text
            className={`${
              table.is_available ? "text-green-600" : "text-red-500 "
            } text-lg font-medium`}
          >
            {table.orders ? `Ped. ${table.orders[0].id}` : "Disponível"}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default DashboardTable;
