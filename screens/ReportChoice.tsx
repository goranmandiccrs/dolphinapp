import { observer } from "mobx-react";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";

import React from "react";

export const ReportChoice = observer(({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
      <Text>
        <Text>Welcome to our field report app.</Text>
      </Text>
      <ImageBackground
        source={require("../assets/maintenance_report.png")}
        style={{ width: "100%", height: 275 }}
      >
        <Text>Create maintenance report</Text>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/service_report.png")}
        style={{ width: "100%", height: 275 }}
      >
        <Text onPress={() => navigation.navigate("ServiceReport")}>
          Create service report
        </Text>
      </ImageBackground>
      <Button
        onPress={() => navigation.navigate("Login")}
        title="Back to login"
      />
    </SafeAreaView>
  );
});
