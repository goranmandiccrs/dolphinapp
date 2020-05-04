import { observer } from "mobx-react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  StyleSheet
} from "react-native";

import React from "react";

export const ReportChoice = observer(({ navigation }) => {
  const navigateToMaintenanceReport = () => {
    navigation.navigate("MaintenanceReport");
  };

  return (
    <ScrollView>
      <View style={styles.container} >

        <Text style={styles.title}>Choose the report
              you would like to create:</Text>
      <ImageBackground
        source={require("../assets/maintenance_report.png")}
        style={styles.reportBox}
      >
        <Text style={styles.reportTitle} onPress={() => navigateToMaintenanceReport()}>
          Create maintenance report</Text>
      </ImageBackground>

      <ImageBackground
        source={require("../assets/service_report.png")}
        style={styles.reportBox}
      >
        <Text style={styles.reportTitle} onPress={() => navigation.navigate("ServiceReport")}>
          Create service report
        </Text>
      </ImageBackground>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: "AcuminPro-Bold",
    marginBottom: 14,
  },
  reportBox: {
    display: "flex",
    paddingLeft: 34,
    paddingBottom: 27,
    justifyContent: "flex-end",
    height: 275,
    marginBottom: 26,
    overflow: "hidden",
    borderRadius: 10,
  },
  reportTitle: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "bold",
    color: "#fff",
    maxWidth: 230,
  },
});

