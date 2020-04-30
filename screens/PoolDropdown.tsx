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
      onItemSelect={(client) => selectClient(client)}
      containerStyle={{ padding: 5 }}
      itemStyle={{
        padding: 10,
        marginTop: 2,
        backgroundColor: "#ddd",
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 5,
      }}
      itemTextStyle={{ color: "#222" }}
      itemsContainerStyle={{ maxHeight: 140 }}
      items={clientsDataArray}
      resetValue={false}
      value={selectedClient?.firstName || ""}
      textInputProps={{
        placeholder: "placeholder",
        underlineColorAndroid: "transparent",
        style: {
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
        },
        onTextChange: (text) => console.log(text),
      }}
      listProps={{
        nestedScrollEnabled: true,
      }}
    />
  );
});
