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

import RadioButton from '../../components/RadioButton';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../../state/RootModel";

const PROP = [
	{
		key: 'yes',
		text: 'Yes',
	},
	{
		key: 'no',
		text: 'No',
	},
];


export const Equipment = observer(({ navigation }) => {
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

  const [isEnabledPump, setIsEnabledPump] = useState(false);
  const toggleSwitchPump = () => setIsEnabledPump(previousStatePump => !previousStatePump);

  const [isEnabledFilter, setIsEnabledFilter] = useState(false);
  const toggleSwitchFilter = () => setIsEnabledFilter(previousStateFilter => !previousStateFilter);
  
  const [isEnabledValves, setIsEnabledValves] = useState(false);
  const toggleSwitchValves = () => setIsEnabledValves(previousStateValves => !previousStateValves);

  const [isEnabledOther, setIsEnabledOther] = useState(false);
  const toggleSwitchOther = () => setIsEnabledOther(previousStateOther => !previousStateOther);

  
  return (
    <ScrollView>
      <View style={styles.container}>

      
      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Pump in good condition?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledPump ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchPump}
              value={isEnabledPump}
            />
            <Text style={styles.notes}> Notes? </Text>
        </View>

       { isEnabledPump && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Pool filter in good condition?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledFilter ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchFilter}
              value={isEnabledFilter}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledFilter && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Valves in good condition?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledValves ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchValves}
              value={isEnabledValves}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledValves && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Valves in good condition?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledOther ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchOther}
              value={isEnabledOther}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledOther && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      
      <Button title={"Next"} onPress={() => navigation.navigate("Overall")}/>
      </View>

    </ScrollView>
  );
});

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    paddingTop: 56,
    backgroundColor: "#EFEFF4",

  },
  scrollView: {
    backgroundColor: "#EFEFF4",
  },
  label: {
    fontSize: 14,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "bold",
    maxWidth: 150,
    flex: 1,
    color: "#231D38",
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
  notes: {
    color: "#231D38",
  },
  radioNotes: {
    marginBottom: 35,
  },
});
