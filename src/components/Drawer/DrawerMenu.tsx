import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import uuid from "react-native-uuid";
import { AuthContext } from "../../contexts/AuthContext";
import { CheckIfUserHasPermission } from "../../utils/CheckIfUserHasPermissions";
import { DrawerHeader } from "./DrawerHeader";
import { MultiItem, SingleItem } from "./DrawerMenuItem";
import { DrawerAuthList, DrawerMenuList } from "./MenuList";

export const DrawerMenu = ({ drawer }: any) => {
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <View className="flex-1 rounded-full">
      <DrawerHeader />
      <View className="flex-1 py-2 bg-themeDark">
        <FlatList
          data={isAuthenticated ? DrawerMenuList : DrawerAuthList}
          renderItem={({ item }) => {
            if (
              !user ||
              CheckIfUserHasPermission(
                (user as any).permissions,
                item.permissions
              )
            ) {
              if (item.submenus.length == 0)
                return (
                  <SingleItem
                    key={`${uuid.v4()}`}
                    drawer={drawer}
                    item={item}
                  />
                );

              return (
                <MultiItem key={`${uuid.v4()}`} drawer={drawer} item={item} />
              );
            }
            return null;
          }}
        />
      </View>
    </View>
  );
};
