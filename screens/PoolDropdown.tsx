import React from "react";
import SearchableDropdown from "react-native-searchable-dropdown";
import { observer } from "mobx-react";
import { useMst } from "../state/RootModel";

export const PoolDropdown = observer(() => {
  const {
    maintenanceReportForm: { clientsDataArray, selectClient, selectedClient },
  } = useMst();
  return (
    <SearchableDropdown
      onItemSelect={(client) => {
        selectClient(client)
      }}
      containerStyle={{ marginBottom: 35 }}
      itemStyle={{
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#D3D9EB",
        padding: 12,
        overflow: "hidden",
      }}
      itemTextStyle={{ color: "#55575E" }}
      itemsContainerStyle={{ maxHeight: 140 }}
      items={clientsDataArray}
      resetValue={false}
      value={selectedClient?.firstName || ""}
      textInputProps={{
        placeholder: "Search select Pool Name / Address",
        underlineColorAndroid: "transparent",
        style: {
          borderRadius: 8,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#D3D9EB",
          padding: 12,
          flex: 1,
          marginRight: 11,
        },
        onTextChange: (text) => console.log(text),
      }}
      listProps={{
        nestedScrollEnabled: true,
      }}
    />
  );
});
