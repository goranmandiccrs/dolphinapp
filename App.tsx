// @ts-ignore
import Logo from "./assets/logo.svg";
import React from "react";
import { Provider, rootStore } from "./state/RootModel";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { ReportChoice } from "./screens/ReportChoice";
import { ServiceReport } from "./screens/ServiceReport";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ReportChoice" component={ReportChoice} />
          <Stack.Screen name="ServiceReport" component={ServiceReport} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
