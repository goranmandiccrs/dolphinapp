import { observer } from "mobx-react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet
} from "react-native";

import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const ReportChoice = observer(({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container} >
      <ScrollView contentInsetAdjustmentBehavior="automatic" />

        <Text style={styles.title}>Choose the report
              you would like to create:</Text>
      <ImageBackground
        source={require("../assets/maintenance_report.png")}
        style={styles.reportBox}
      >
        <Text style={styles.reportTitle} onPress={() => navigation.navigate("MaintenanceReport")}>
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
     {/* <Button
        onPress={() => navigation.navigate("Login")}
        title="Back to login"
      />*/}
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: "bold",
    marginBottom: 14,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  reportBox: {
    display: "flex",
    paddingLeft: 34,
    paddingBottom: 27,
    justifyContent: "flex-end",
    height: 275,
    marginBottom: 26,
  },
  reportTitle: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "bold",
    color: "#fff",
    maxWidth: 230,
  },
});

