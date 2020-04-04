// @ts-ignore
import Logo from "./assets/logo.svg";
import React from "react";
import { Provider, rootStore } from "./state/RootModel";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { ReportChoice } from "./screens/ReportChoice";
import { ServiceReport } from "./screens/ServiceReport";
import { MaintenanceReport } from "./screens/MaintenanceReport";
import { Cleanliness } from "./screens/steps/Cleanliness";
import { Chemicals } from "./screens/steps/Chemicals";
import { Equipment } from "./screens/steps/Equipment";
import { Overall } from "./screens/steps/Overall";
import { Note } from "./screens/steps/Note";
import { Signature } from "./screens/steps/Signature";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ReportChoice" component={ReportChoice} />
          <Stack.Screen name="ServiceReport" component={ServiceReport} />
          <Stack.Screen name="MaintenanceReport" component={MaintenanceReport} />
          <Stack.Screen name="Cleanliness" component={Cleanliness} />
          <Stack.Screen name="Chemicals" component={Chemicals} />
          <Stack.Screen name="Equipment" component={Equipment} />
          <Stack.Screen name="Overall" component={Overall} />
          <Stack.Screen name="Note" component={Note} />
          <Stack.Screen name="Signature" component={Signature} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
