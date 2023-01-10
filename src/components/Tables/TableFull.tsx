import React, { useState } from "react";
import { Text } from "react-native";
import { DataTable } from "react-native-paper";
import uuid from "uuid";
import { styles } from "../../styles/main";

type Props = {
  columns: { key: string; name: string; width?: string }[];
  rows: any[];
  numberOfItemsPerPageList?: number[];
};

export const TableFull = ({
  columns,
  rows,
  numberOfItemsPerPageList = [5, 10, 20],
}: Props) => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  const defaultData: any[] = rows.filter(
    (item: any, index: number) => index < numberOfItemsPerPageList[0]
  );

  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(
    numberOfItemsPerPageList[0]
  );

  const from: number = page * numberOfItemsPerPage;
  const to: number = Math.min((page + 1) * numberOfItemsPerPage, rows.length);

  const handlePageChange = async (page: number, itemsPerPage: number) => {
    setPage(page);
    const startIndex: number = page * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;

    setData(
      rows.filter(
        (item: any, index: number) => index >= startIndex && index < endIndex
      )
    );
  };

  const handleChangeItemsPerPage = async (quantity: number) => {
    setNumberOfItemsPerPage(quantity);
    handlePageChange(0, quantity);
  };

  return (
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

      {(data.length == 0 ? defaultData : data).map((row: any) => (
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
        numberOfPages={Math.ceil(rows.length / numberOfItemsPerPage)}
        onPageChange={(page: number) =>
          handlePageChange(page, numberOfItemsPerPage)
        }
        label={`${from + 1}-${to} de ${rows.length}`}
        showFastPaginationControls
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={numberOfItemsPerPage}
        onItemsPerPageChange={(quantity: number) =>
          handleChangeItemsPerPage(quantity)
        }
        selectPageDropdownLabel={"Registros por página"}
      />
    </DataTable>
  );
};
