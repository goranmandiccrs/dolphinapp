import { observer } from "mobx-react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  SafeAreaView,
  ScrollView,
  Switch,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../../state/RootModel";

export const Chemicals = observer(({ navigation }) => {
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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <ScrollView>
      <View style={styles.container}>

      
      <View style={styles.indicatorWithNotes}
      >
      <Text style={styles.labelLarge}>Chlorine</Text>

      <Text style={styles.label}>Main</Text>
        <View>
          <View style={styles.flex}>
            <TextInput
              style={styles.inputIndicator}
              placeholder="Grade 1 to 5"
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
        
      <Text style={styles.label}>Spa</Text>
        <View>
          <View style={styles.flex}>
            <TextInput
              style={styles.inputIndicator}
              placeholder="Grade 1 to 5"
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

        <View style={[styles.flex, styles.switchWrapper]}>
        <Switch
            trackColor={{ false: "#DADADA", true: "#745FB8" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text> Notes? </Text>
       </View>

       <TextInput
              style={styles.textArea}
              placeholder="You can write your notes here"
              onChangeText={(text) => setName(text)}
              multiline={true}
            />

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

      <Button title={"Next"} onPress={onSubmit} />
    </ScrollView>
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
  labelLarge: {
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "bold",
    marginBottom: 13,

  },
  input: {
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    padding: 12,
    marginBottom: 35,
  },
  textArea: {
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    padding: 12,
    marginBottom: 35,
    height: 129,
    textAlignVertical: "top"
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
  switchWrapper: {
    marginTop: 13,
    marginBottom: 13,
    alignItems: "center",
  },
  indicatorWithNotes: {
    marginBottom: 33,
  },
});
