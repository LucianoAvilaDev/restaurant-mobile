import { yupResolver } from "@hookform/resolvers/yup";
import React, { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import BadgeGreen from "../../components/Badges/BadgeGreen";
import BadgeRed from "../../components/Badges/BadgeRed";
import { TableFull } from "../../components/Tables/TableFull";
import { FilterTemplate } from "../../components/templates/filters/FilterTemplate";
import { TablesFilters } from "../../components/templates/filters/form-filters/TablesFilters";
import { PageHeader } from "../../components/templates/PageHeader";
import { TablesSchema } from "../../schemas/TablesSchema";
import { api } from "../../services/api";
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

  useLayoutEffect(() => {
    getTables();
  }, []);

  return (
    <SafeAreaView className={`flex-1 bg-themeBgBody`}>
      {/* <ModalTemplate
        title="Recuperar senha"
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <></>
      </ModalTemplate> */}

      <PageHeader
        title={"Mesas"}
        subtitle={"Gerencie as mesas do restaurante!"}
      />

      <ScrollView className="w-full">
        <View className="flex-1 px-4 py-4 justify-center  w-full ">
          {/* --------------FILTERS ------------------------------ */}
          <View>
            <FilterTemplate>
              <TablesFilters
                control={control}
                register={register}
                setValue={setValue}
                handleClear={handleClear}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
              />
            </FilterTemplate>
          </View>
          {/* ----------------------------------------------------- */}

          {/* -------------CONTENT --------------------------------*/}
          <View>
            <TableFull columns={columns} rows={data} />
          </View>
          {/* ----------------------------------------------------- */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
