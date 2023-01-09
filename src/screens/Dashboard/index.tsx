import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import uuid from "react-native-uuid";
import SmallCard from "../../components/Cards/SmallCard";
import DashboardTable from "../../components/templates/DashboardTable";
import { PageHeader } from "../../components/templates/PageHeader";
import { AuthContext } from "../../contexts/AuthContext";
import { LongText } from "../../Labels/LongText";
import { api } from "../../services/api";
import { CardType } from "../../types/CardType";
import { ClientType } from "../../types/ClientType";
import { OrderType } from "../../types/OrderType";
import { SelectType } from "../../types/SelectType";
import { TableType } from "../../types/TableType";

const Index = () => {
  const navigation: any = useNavigation();

  const { user, signIn, signOut, setIsLoading } = useContext(AuthContext);

  let delayTime: number = 150;
  let tablesDelay: number = 550;

  BackHandler.addEventListener("hardwareBackPress", () => {
    navigation.navigate(`Welcome`);
    return true;
  });

  const [tableCards, setTableCards] = useState<CardType[]>([]);
  const [orderCards, setOrderCards] = useState<CardType[]>([]);
  const [tables, setTables] = useState<any[]>([]);
  const [clients, setClients] = useState<SelectType[]>([]);

  const GetClients = async () => {
    await api
      .get("clients")
      .then(({ data }: any) => {
        setClients(
          data.map((client: ClientType) => {
            return {
              value: client.id,
              label: client.name,
            };
          })
        );
      })
      .catch((e: AxiosError) => {
        if (e.response?.status == 401) {
          signOut();
          navigation.navigate(`Welcome`);
        }
      });
  };

  const getData = async () => {
    await api
      .get("tables")
      .then(({ data }: any) => {
        const occupiedTables = data.filter(
          (table: TableType) => !table.is_available
        ).length;
        setTableCards([
          {
            title: "Mesas Ocupadas",
            value: `${occupiedTables} / ${data.length}`,
          },
          {
            title: "Mesas Disponíveis",
            value: `${data.length - occupiedTables} / ${data.length}`,
          },
        ]);
      })
      .catch((e: AxiosError) => {
        if (e.response?.status == 401) {
          signOut();
          navigation.navigate(`Welcome`);
        }
      });

    await api
      .post("orders/filters", { date: moment().format("YYYY-MM-DD") })
      .then(({ data }: any) => {
        const openOrders = data.filter(
          (order: OrderType) => !order.is_closed
        ).length;
        setOrderCards([
          {
            title: "Pedidos abertos",
            value: `${openOrders} / ${data.length}`,
          },
        ]);
      })
      .catch((e: AxiosError) => Alert.alert(e.response?.data as string));

    await api.get("all-tables-and-orders").then(({ data }) => {
      setTables(data);
    });
  };

  useEffect(() => {
    GetClients();
    getData();
  }, []);

  return (
    <SafeAreaView className={`flex-1 bg-themeBgBody`}>
      <PageHeader
        title={"Tela Principal"}
        subtitle={"Gerencie os pedidos de hoje!"}
      />

      <ScrollView className="my-4 ">
        <View className="flex-1 px-6 py-4 justify-center space-y-4  w-full ">
          <View>
            <Text className="font-normal text-lg">
              Bem-vindo,{" "}
              <LongText className="text-xl italic font-bold">
                {`${user?.name}`}
              </LongText>
            </Text>
          </View>
          <View>
            <View>
              <View className="px-2 space-y-4 py-4">
                {[...tableCards, ...orderCards].map((card: CardType) => {
                  delayTime += 150;
                  return (
                    <Animatable.View
                      animation="fadeInLeftBig"
                      duration={300}
                      delay={delayTime}
                      key={`${uuid.v4()}`}
                    >
                      <SmallCard title={`${card.title}`} value={card.value} />
                    </Animatable.View>
                  );
                })}
              </View>
            </View>
          </View>
          <View
            className={`flex-1 flex-row flex-wrap w-full justify-between items-center `}
          >
            {tables.map((table: any) => {
              tablesDelay += 150;
              return (
                <Animatable.View
                  animation="fadeInUpBig"
                  easing="ease-in-out"
                  delay={tablesDelay}
                  duration={400}
                  key={`${uuid.v4()}`}
                  className="px-2"
                >
                  <DashboardTable
                    table={table}
                    onPress={async () => {
                      if (!user?.permissions.includes("manage_orders")) return;
                      await Promise
                        .resolve
                        // setModalTemplate(
                        //   <FormOrders
                        //     clients={clients}
                        //     id={
                        //       table.orders
                        //         ? table.orders[0].id
                        //         : undefined
                        //     }
                        //     handleClear={async () => {
                        //       getData();
                        //     }}
                        //     setModal={setModal}
                        //     table={table}
                        //   />
                        // )
                        ()
                        .then(() => {
                          // setModal(true);
                        });
                    }}
                  />
                </Animatable.View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
