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

import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../../state/RootModel";


export const Chemicals = observer(({ navigation }) => {
  const {
    chemicalsForm: {
      setChlorineMain,
      setChlorineSpa,
      setChlorineAdditional,
      setPhMain,
      setPhSpa,
      setPhAdditional,
      setAlkalintyMain,
      setAlkalintySpa,
      setAlkalintyAdditional,
      setCalciumMain,
      setCalciumSpa,
      setCalciumAdditional,
      setCyaMain,
      setCyaSpa,
      setCyaAdditional,
      increaseNumberValue,
      decreaseNumberValue,
      decreaseDecimalNumberValue,
      increaseDecimalNumberValue,
      increaseNumberValueByTen,
      decreaseNumberValueByTen,
      increaseNumberValueByFive,
      decreaseNumberValueByFive,
      chlorineMain,
      chlorineSpa,
      clorineAdditional,
      phMain,
      phSpa,
      phAdditional,
      alkalintyMain,
      alkalintySpa,
      alkalintyAdditional,
      calciumMain,
      calciumSpa,
      calciumAdditional,
      cyaMain,
      cyaSpa,
      cyaAdditional,
      onSubmit,
      
    },
  } = useMst();

  const [isEnabledChlorine, setIsEnabledChlorine] = useState(false);
  const toggleSwitchChlorine = () => setIsEnabledChlorine(previousStateChlorine => !previousStateChlorine);

  const [isEnabledPh, setIsEnabledPh] = useState(false);
  const toggleSwitchPh = () => setIsEnabledPh(previousStatePh => !previousStatePh);
  
  const [isEnabledAlkalinity, setIsEnabledAlkalinity] = useState(false);
  const toggleSwitchAlkalinity = () => setIsEnabledAlkalinity(previousStateAlkalinity => !previousStateAlkalinity);

  const [isEnabledCalcium, setIsEnabledCalcium] = useState(false);
  const toggleSwitchCalcium = () => setIsEnabledCalcium(previousStateCalcium => !previousStateCalcium);

  const [isEnabledCya, setIsEnabledCya] = useState(false);
  const toggleSwitchCya = () => setIsEnabledCya(previousStateCya => !previousStateCya);
  
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
              onChangeText={(text) => setChlorineMain(parseInt(text))}
              value={chlorineMain?.toString()}
            />
            <View style={[styles.flex, styles.buttonGroup]}>
            <TouchableHighlight
                  onPress={() => decreaseNumberValue("chlorineMain", 1)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseNumberValue("chlorineMain", 5)}
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
              onChangeText={(text) => setChlorineSpa(parseInt(text))}
              value={chlorineSpa?.toString()}
            />

            <View style={[styles.flex, styles.buttonGroup]}>
              <TouchableHighlight
                  onPress={() => decreaseNumberValue("chlorineSpa", 1)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseNumberValue("chlorineSpa", 5)}
                style={[styles.indicator, styles.indicatorBorderRight]}
              >
                  <Text style={styles.indicatorText}> + </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
        <Switch
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledChlorine ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchChlorine}
            value={isEnabledChlorine}
          />
          <Text> Notes? </Text>
       </View>

       { isEnabledChlorine && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setChlorineAdditional(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}
      >
      <Text style={styles.labelLarge}>PH</Text>

      <Text style={styles.label}>Main</Text>
        <View>
          <View style={styles.flex}>
            <TextInput
              style={styles.inputIndicator}
              placeholder="7.0 to 8.0"
              onChangeText={(text) => setPhMain(parseInt(text))}
              value={phMain?.toString()}
            />

            <View style={[styles.flex, styles.buttonGroup]}>
            <TouchableHighlight
                  onPress={() => decreaseDecimalNumberValue("phMain", 7.0)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseDecimalNumberValue("phMain", 8.0)}
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
              placeholder="7.0 to 8.0"
              onChangeText={(text) => setPhSpa(parseInt(text))}
              value={phSpa?.toString()}
            />

            <View style={[styles.flex, styles.buttonGroup]}>
              <TouchableHighlight
                  onPress={() => decreaseDecimalNumberValue("phSpa", 7)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseDecimalNumberValue("phSpa", 8)}
                style={[styles.indicator, styles.indicatorBorderRight]}
              >
                  <Text style={styles.indicatorText}> + </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
        <Switch
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledPh ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchPh}
            value={isEnabledPh}
          />
          <Text> Notes? </Text>
       </View>

       { isEnabledPh && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setPhAdditional(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}
      >
      <Text style={styles.labelLarge}>Alkalinity</Text>

      <Text style={styles.label}>Main</Text>
        <View>
          <View style={styles.flex}>
            <TextInput
              style={styles.inputIndicator}
              placeholder="Grade 20 to 120"
              onChangeText={(text) => setAlkalintyMain(parseInt(text))}
              value={alkalintyMain?.toString()}
            />

            <View style={[styles.flex, styles.buttonGroup]}>
              <TouchableHighlight
                  onPress={() => decreaseNumberValueByTen("alkalintyMain", 20)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseNumberValueByTen("alkalintyMain", 120)}
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
              placeholder="Grade 20 to 120"
              onChangeText={(text) => setAlkalintySpa(parseInt(text))}
              value={alkalintySpa?.toString()}
            />

            <View style={[styles.flex, styles.buttonGroup]}>
              <TouchableHighlight
                  onPress={() => decreaseNumberValueByTen("alkalintySpa", 20)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseNumberValueByTen("alkalintySpa", 120)}
                style={[styles.indicator, styles.indicatorBorderRight]}
              >
                  <Text style={styles.indicatorText}> + </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
        <Switch
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledAlkalinity ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchAlkalinity}
            value={isEnabledAlkalinity}
          />
          <Text> Notes? </Text>
       </View>

       { isEnabledAlkalinity && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setAlkalintyAdditional(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}
      >
      <Text style={styles.labelLarge}>Calcium</Text>

      <Text style={styles.label}>Main</Text>
        <View>
          <View style={styles.flex}>
            <TextInput
              style={styles.inputIndicator}
              placeholder="Grade 150 to 900"
              onChangeText={(text) => setCalciumMain(parseInt(text))}
              value={calciumMain?.toString()}
            />

          <View style={[styles.flex, styles.buttonGroup]}>
              <TouchableHighlight
                  onPress={() => decreaseNumberValueByTen("calciumMain", 150)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseNumberValueByTen("calciumMain", 900)}
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
              placeholder="Grade 150 to 900"
              onChangeText={(text) => setPhMain(parseInt(text))}
              value={calciumSpa?.toString()}
            />
          <View style={[styles.flex, styles.buttonGroup]}> 
        
            <TouchableHighlight
                  onPress={() => decreaseNumberValueByTen("calciumSpa", 150)}
                  style={[styles.indicator, styles.indicatorBorderLeft]}
                >
                <Text style={styles.indicatorText}> - </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => increaseNumberValueByTen("calciumSpa", 900)}
                style={[styles.indicator, styles.indicatorBorderRight]}
              >
                  <Text style={styles.indicatorText}> + </Text>
              </TouchableHighlight>
          </View>
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
        <Switch
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledCalcium ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchCalcium}
            value={isEnabledCalcium}
          />
          <Text> Notes? </Text>
       </View>

       { isEnabledCalcium && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setCalciumAdditional(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}
      >
      <Text style={styles.labelLarge}>CYA</Text>

      <Text style={styles.label}>Main</Text>
        <View>
          <View style={styles.flex}>
            <TextInput
              style={styles.inputIndicator}
              placeholder="Grade 5 to 80"
              onChangeText={(text) => setCyaMain(parseInt(text))}
              value={cyaMain?.toString()}
            />

              <View style={[styles.flex, styles.buttonGroup]}> 
                <TouchableHighlight
                      onPress={() => decreaseNumberValueByFive("cyaMain", 150)}
                      style={[styles.indicator, styles.indicatorBorderLeft]}
                    >
                    <Text style={styles.indicatorText}> - </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => increaseNumberValueByFive("cyaMain", 900)}
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
              placeholder="Grade 5 to 80"
              onChangeText={(text) => setCyaSpa(parseInt(text))}
              value={cyaSpa?.toString()}
            />

            <View style={[styles.flex, styles.buttonGroup]}> 
                <TouchableHighlight
                      onPress={() => decreaseNumberValueByFive("cyaSpa", 150)}
                      style={[styles.indicator, styles.indicatorBorderLeft]}
                    >
                    <Text style={styles.indicatorText}> - </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => increaseNumberValueByFive("cyaSpa", 900)}
                    style={[styles.indicator, styles.indicatorBorderRight]}
                  >
                      <Text style={styles.indicatorText}> + </Text>
                  </TouchableHighlight>
              </View>
          </View>
        </View>

        <View style={[styles.flex, styles.switchWrapper]}>
        <Switch
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledCya ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchCya}
            value={isEnabledCya}
          />
          <Text> Notes? </Text>
       </View>

       { isEnabledCya && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setCyaAdditional(text)}
          multiline={true}
        />}

      </View>
      

      <LinearGradient 
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
            colors={['#5B70B8', '#7360B8']} 
            style={styles.linearGradient}
          >
    
        <Text style={styles.buttonText} 
          onPress={() => navigation.navigate("Equipment")}
        >
          Next
        </Text>
      </LinearGradient>
      
      </View>

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
    paddingBottom: 40,
    paddingTop: 55,
    backgroundColor: "#EFEFF4",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  label: {
    fontSize: 14,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "bold",
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
  indicatorWithNotes: {
    marginBottom: 33,
  },

  linearGradient: {
    marginTop: 31,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    flex: 1,
  },
  buttonText: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: "AcuminPro-Bold",
    paddingTop: 18,
    paddingBottom: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
