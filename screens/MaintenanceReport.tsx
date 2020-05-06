import { observer } from "mobx-react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";

import RadioButton from "../components/RadioGroup";
import DateTimePicker from "@react-native-community/datetimepicker";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../state/RootModel";
import { PoolDropdown } from "./PoolDropdown";

export const MaintenanceReport = observer(({ navigation }) => {
  const {
    maintenanceReportForm: {
      setNumberOfBathers,
      reportTime,
      time,
      weatherRadioGroup,
      increaseNumberValue,
      decreaseNumberValue,
      numberOfBathers,
    },
  } = useMst();

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <View style={styles.container}>
          <Text style={styles.label}>Pool Name / Address</Text>
          <PoolDropdown />
          <Text style={styles.label}>Number of bathers</Text>
          <View style={{ marginBottom: 35 }}>
            <View style={styles.flex}>
              <TextInput
                style={styles.inputIndicator}
                onChangeText={(text) => setNumberOfBathers(parseInt(text))}
                value={numberOfBathers?.toString()}
                placeholder="EX. 1"
              />
              <View style={[styles.flex, styles.buttonGroup]}>
                <TouchableHighlight
                  onPress={() => decreaseNumberValue("numberOfBathers", 1)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                  <Text style={styles.indicatorText}> - </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => increaseNumberValue("numberOfBathers", 5)}
                  style={[styles.indicator, styles.indicatorBorderRight]}
                >
                  <Text style={styles.indicatorText}> + </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>

          <Text style={styles.label}>Date & Time</Text>
          <Text
            style={[
              styles.input,
              { color: "rgba(85, 87, 94, 0.4)", borderRadius: 5 },
            ]}
          >
            {reportTime.toDateString()}, {time}
          </Text>

          <View style={[styles.radiosContainer, { marginBottom: 87 }]}>
            <Text style={styles.label}>Weather?</Text>
            <RadioButton
              options={weatherRadioGroup.options}
              radioGroup={weatherRadioGroup}
            />
          </View>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#5B70B8", "#7360B8"]}
            style={styles.linearGradient}
          >
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate("Cleanliness")}
            >
              Next
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
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
    paddingTop: 55,
    paddingBottom: 37,
    backgroundColor: "#EFEFF4",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 14,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontFamily: "AcuminPro-Bold",
    color: "#231D38",
  },
  input: {
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    padding: 12,
    marginBottom: 35,
    overflow: "hidden",
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
  radiosContainer: {
    // width: '100%',
    // flexDirection: "column",
    // height: '50%',
    // alignContent: "stretch",
    // flexWrap: 'wrap'
  },
});
