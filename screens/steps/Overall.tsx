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


export const Overall = observer(({ navigation }) => {
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

  const [isEnabledChlorinator, setIsEnabledChlorinator] = useState(false);
  const toggleSwitchChlorinator = () => setIsEnabledChlorinator(previousStateChlorinator => !previousStateChlorinator);

  const [isEnabledGuages, setIsEnabledGuages] = useState(false);
  const toggleSwitchGuages = () => setIsEnabledGuages(previousStateGuages => !previousStateGuages);
  
  const [isEnabledHamzat, setIsEnabledHamzat] = useState(false);
  const toggleSwitchHamzat = () => setIsEnabledHamzat(previousStateHamzat => !previousStateHamzat);

  const [isEnabledMsds, setIsEnabledMsds] = useState(false);
  const toggleSwitchMsds = () => setIsEnabledMsds(previousStateMsds => !previousStateMsds);

  const [isEnabledLeak, setIsEnabledLeak] = useState(false);
  const toggleSwitchLeak = () => setIsEnabledLeak(previousStateLeak => !previousStateLeak);

  const [isEnabledFilter, setIsEnabledFilter] = useState(false);
  const toggleSwitchFilter = () => setIsEnabledFilter(previousStateFilter => !previousStateFilter);
  
  const [isEnabledCartridges, setIsEnabledCartridges] = useState(false);
  const toggleSwitchCartridges = () => setIsEnabledCartridges(previousStateCartridges => !previousStateCartridges);
  
  return (
    <ScrollView>
      <View style={styles.container}>

      
      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Chlorinator opperational?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledChlorinator ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchChlorinator}
              value={isEnabledChlorinator}
            />
            <Text style={styles.notes}> Notes? </Text>
        </View>

       { isEnabledChlorinator && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>All guages working?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledGuages ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchGuages}
              value={isEnabledGuages}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledGuages && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>HAMZAT kit?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledHamzat ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchHamzat}
              value={isEnabledHamzat}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledHamzat && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>MSDS Sheet?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledMsds ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchMsds}
              value={isEnabledMsds}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledMsds && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Water leak detection?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledLeak ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchLeak}
              value={isEnabledLeak}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledLeak && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Filter Backwashed?</Text>
          
          <View style={{flex: 1}}>
            <RadioButton PROP={PROP} />
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
          <Switch
              trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
              thumbColor={isEnabledCartridges ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#EFEFF4"
              onValueChange={toggleSwitchCartridges}
              value={isEnabledCartridges}
            />
            <Text> Notes? </Text>
        </View>

       { isEnabledCartridges && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.radioNotes}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.label}>Cartridges Washed?</Text>
          
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

      
      <Button title={"Next"} onPress={() => navigation.navigate("Note")}/>
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
