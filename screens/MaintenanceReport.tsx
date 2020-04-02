import { observer } from "mobx-react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  SafeAreaView,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../state/RootModel";

export const MaintenanceReport = observer(({ navigation }) => {
  const {
    maintenanceReportForm: {
      isDatePickerVisible,
      isTimePickerVisible,
      onChange,
      onSubmit,
      setName,
      reportDate,
      reportTime,
    },
  } = useMst();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Pool Name / Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Technician name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Number of bathers</Text>
        <View>
          <View style={styles.flex}>
            <TextInput
              style={styles.inputIndicator}
              onChangeText={(text) => setName(text)}
            />

            <View style={[styles.flex, styles.buttonGroup]}>
              <TouchableHighlight
                onPress={onSubmit}
                style={[styles.indicator, styles.indicatorBorderLeft]}
              >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={onSubmit}
                style={[styles.indicator, styles.indicatorBorderRight]}
              >
                <Text style={styles.indicatorText}> + </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        {isDatePickerVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={reportDate}
            //@ts-ignore
            mode={"date"}
            display="default"
            onChange={onChange}
          />
        )}
        {isTimePickerVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={reportTime}
            //@ts-ignore
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <Button title={"Next"} onPress={() => navigation.navigate("Cleanliness")} />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  flex: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'stretch'
  },
  container: {
    padding: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  label: {
    fontSize: 14,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    padding: 12,
    marginBottom: 35,
  },
  inputIndicator: {
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    padding: 12,
    marginBottom: 8,
    flex: 1,
    marginRight: 11,
  },
  indicator: {
    borderWidth: 1,
    borderColor: "#745FB8",
    padding: 4,
    marginBottom: 16,
    marginTop: 8,
    textAlign: "center",
  },
  indicatorBorderLeft: {
    borderBottomLeftRadius: 3.4,
    borderTopLeftRadius: 3.4,
  },
  indicatorBorderRight: {
    borderBottomRightRadius: 3.4,
    borderTopRightRadius: 3.4,
  },
  indicatorText: {
    color: "#745FB8",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonGroup: {
    marginRight: 16,
  },
});
