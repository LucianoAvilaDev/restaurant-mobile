import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

export const CheckInternetConnection = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};
