import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { DataTable } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import uuid from "uuid";
import BadgeGreen from "../../components/Badges/BadgeGreen";
import BadgeRed from "../../components/Badges/BadgeRed";
import { ButtonSolidSmall } from "../../components/Buttons/ButtonSolidSmall";
import InputSelect from "../../components/Inputs/InputSelect";
import { InputText } from "../../components/Inputs/InputText";
import { ModalTemplate } from "../../components/templates/ModalTemplate";
import { PageHeader } from "../../components/templates/PageHeader";
import { TablesSchema } from "../../schemas/TablesSchema";
import { api } from "../../services/api";
import { styles } from "../../styles/main";
import { SelectType } from "../../types/SelectType";
import { TableType } from "../../types/TableType";

const Index = () => {
  const [tables, setTables] = useState<TableType[]>([]);
  const [editId, setEditId] = useState<string>("");

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>("flipInX");

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TablesSchema()),
  });

  const options: SelectType[] = [
    {
      key: "true",
      value: "Disponível",
    },
    {
      key: "false",
      value: "Indisponível",
    },
  ];

  const columns: any = [
    {
      key: "number",
      name: "Número",
      width: "40%",
    },
    {
      key: "isAvailable",
      name: "Situação",
      width: "40%",
    },

    {
      key: "actions",
      name: "Ações",
    },
  ];

  const data: any[] = tables.map((table: TableType) => {
    return {
      number: <Text>{table.number}</Text>,
      isAvailable: table.is_available ? (
        <BadgeGreen text={"Disponível"} />
      ) : (
        <BadgeRed text="Indisponível" />
      ),
      actions: (
        <View className={`flex flex-wrap`}>
          <View>
            <Icon name="dots-three-vertical" size={18} />
          </View>
        </View>
      ),
    };
  });

  const getTables = async () => {
    await api.get("tables").then(({ data }: any) => {
      setTables(data);
    });
  };

  const handleClear = () => {
    setValue("number", "");
    setValue("isAvailable", "");

    (document.getElementById("search") as any).click();

    return;
  };

  const onSubmit = async (data: any) => {
    try {
      api.post("tables/filters", data).then(({ data }) => {
        setTables(data);
      });
    } catch (e: any) {
      Alert.alert(JSON.stringify(e));
    }
  };
  const [page, setPage] = React.useState<number>(0);

  const numberOfItemsPerPageList = [2, 3, 4];

  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, data.length);

  useEffect(() => {
    setPage(0);
  }, [numberOfItemsPerPage]);

  useLayoutEffect(() => {
    getTables();
  }, []);

  return (
    <SafeAreaView className={`flex-1 bg-themeBgBody`}>
      <ModalTemplate
        title="Recuperar senha"
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <></>
      </ModalTemplate>

      <PageHeader
        title={"Mesas"}
        subtitle={"Gerencie as mesas do restaurante!"}
      />

      <ScrollView className="w-full">
        <View className="flex-1 px-4 py-4 space-y-2 justify-center  w-full ">
          {/* --------------FILTERS ------------------------------ */}
          <View>
            <View className="flex justify-start items-start space-x-2">
              <View className="flex flex-row py-3 items-center ">
                <Text className="text-lg font-semibold">Filtros</Text>
                <TouchableHighlight
                  className="rounded-full p-2"
                  underlayColor={"rgba(200 ,200, 200 , 0.7)"}
                  onPress={() => {
                    if (open) {
                      setAnimation("zoomOut");
                      setTimeout(() => {
                        setOpen(false);
                      }, 200);
                    } else {
                      setOpen(true);
                      setAnimation("zoomIn");
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
            {open && (
              <Animatable.View
                animation={animation}
                duration={300}
                style={styles.shadow}
                className="bg-gray-100 border-gray-300 rounded-md p-4 space-y-2"
              >
                <View>
                  <Controller
                    control={control}
                    render={({ field: { onBlur, value } }) => (
                      <View>
                        <InputText
                          register={register("number")}
                          placeholder={"Pesquise pelo número..."}
                          label={"Número"}
                        />
                      </View>
                    )}
                    name="number"
                  />
                </View>
                <View>
                  <Controller
                    control={control}
                    render={({ field: { onBlur, value } }) => (
                      <View>
                        <InputSelect
                          register={register("isAvailable")}
                          name={"isAvailable"}
                          placeholder={"Selecione a situação..."}
                          label={"Situação"}
                          options={options}
                          setValue={setValue}
                        />
                      </View>
                    )}
                    name="number"
                  />
                </View>

                <View
                  className={`flex flex-row w-full space-x-2 items-center justify-end`}
                >
                  <View className="w-32">
                    <ButtonSolidSmall
                      label={"Pesquisar"}
                      color={"secondary"}
                      onPress={handleSubmit((data: any) => onSubmit(data))}
                    />
                  </View>
                  <View className="w-32">
                    <ButtonSolidSmall
                      label={"Limpar"}
                      color={"warning"}
                      onPress={() => handleClear()}
                    />
                  </View>
                </View>
              </Animatable.View>
            )}
          </View>
          {/* ----------------------------------------------------- */}

          {/* -------------CONTENT --------------------------------*/}

          <View>
            <DataTable
              style={{ ...styles.shadow }}
              className="w-full bg-white rounded-lg "
            >
              <DataTable.Header className="bg-themeDark m-1 rounded-md">
                {columns.map((column: any) => (
                  <DataTable.Title
                    style={{ width: column.width }}
                    key={uuid.v4()}
                    className="flex items-center justify-center"
                  >
                    <Text className="flex text-white text-sm font-bold">
                      {column.name}
                    </Text>
                  </DataTable.Title>
                ))}
              </DataTable.Header>

              {data.map((row: any) => (
                <DataTable.Row key={uuid.v4()}>
                  {columns.map((column: any) => (
                    <DataTable.Cell
                      className="justify-center"
                      style={{ width: column.width ?? "100%" }}
                      key={uuid.v4()}
                    >
                      {row[`${column.key}`]}
                    </DataTable.Cell>
                  ))}
                </DataTable.Row>
              ))}

              <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(data.length / numberOfItemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${data.length}`}
                showFastPaginationControls
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={numberOfItemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                selectPageDropdownLabel={"Rows per page"}
              />
            </DataTable>
          </View>

          {/* ----------------------------------------------------- */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
