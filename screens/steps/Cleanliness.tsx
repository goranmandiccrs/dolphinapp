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

export const Cleanliness = observer(({ navigation }) => {
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
  
  const [isEnabledMainPool, setIsEnabledMainPool] = useState(false);
  const toggleSwitchMainPool = () => setIsEnabledMainPool(previousStateMainPool => !previousStateMainPool);

  const [isEnabledSpaClarity, setIsEnabledSpaClarity] = useState(false);
  const toggleSwitchSpaClarity = () => setIsEnabledSpaClarity(previousStateSpaClarity => !previousStateSpaClarity);

  const [isEnabledPoolBottom, setIsEnabledPoolBottom] = useState(false);
  const toggleSwitchPoolBottom = () => setIsEnabledPoolBottom(previousStatePoolBottom => !previousStatePoolBottom);

  const [isEnabledSkimmer, setIsEnabledSkimmer] = useState(false);
  const toggleSwitchSkimmer = () => setIsEnabledSkimmer(previousStateSkimmer => !previousStateSkimmer);

  const [isEnabledBlow, setIsEnabledBlow] = useState(false);
  const toggleSwitchBlow = () => setIsEnabledBlow(previousStateBlow => !previousStateBlow);

  const [isEnabledPoolPump, setIsEnabledPoolPump] = useState(false);
  const toggleSwitchPoolPump = () => setIsEnabledPoolPump(previousStatePoolPump => !previousStatePoolPump);

  const [isEnabledPoolCleanliness, setIsEnabledPoolCleanliness] = useState(false);
  const toggleSwitchPoolCleanliness = () => setIsEnabledPoolCleanliness(previousStatePoolCleanliness => !previousStatePoolCleanliness);


  const [isEnabledSpaCleanliness, setIsEnabledSpaCleanliness] = useState(false);
  const toggleSwitchSpaCleanliness = () => setIsEnabledSpaCleanliness(previousStateSpaCleanliness => !previousStateSpaCleanliness);
  
  const [isEnabledHairStrainer, setIsEnabledHairStrainer] = useState(false);
  const toggleSwitchHairStrainer = () => setIsEnabledHairStrainer(previousStateHairStrainer => !previousStateHairStrainer);

  const [isEnabledTileLine, setIsEnabledTileLine] = useState(false);
  const toggleSwitchTileLine = () => setIsEnabledTileLine(previousStateTileLine => !previousStateTileLine);
  


  return (
    <ScrollView>
      <View style={styles.container}>

      
      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Main pool clarity</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledMainPool ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchMainPool}
            value={isEnabledMainPool}
          />
          <Text> Notes? </Text>
       </View>

       { isEnabledMainPool && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Spa clarity</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledSpaClarity ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchSpaClarity}
            value={isEnabledSpaClarity}
          />
          <Text> Notes? </Text>
       </View>

       { isEnabledSpaClarity && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Pool bottom vacuumed:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledPoolBottom ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchPoolBottom}
            value={isEnabledPoolBottom}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledPoolBottom && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>
      
      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Skimmer baskets clean:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledSkimmer ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchSkimmer}
            value={isEnabledSkimmer}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledSkimmer && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Blow pool deck area:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledBlow ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchBlow}
            value={isEnabledBlow}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledBlow && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Pool pump area organized:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledPoolPump ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchPoolPump}
            value={isEnabledPoolPump}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledPoolPump && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Main pool cleanliness:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledPoolCleanliness ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchPoolCleanliness}
            value={isEnabledPoolCleanliness}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledPoolCleanliness && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Spa cleanliness:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledSpaCleanliness ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchSpaCleanliness}
            value={isEnabledSpaCleanliness}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledSpaCleanliness && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Hair strainer basket clean:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledHairStrainer ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchHairStrainer}
            value={isEnabledHairStrainer}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledHairStrainer && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

      </View>

      <View style={styles.indicatorWithNotes}>
      <Text style={styles.label}>Tile line clean:</Text>
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
            trackColor={{ false: "#E5E5EA", true: "#745FB8" }}
            thumbColor={isEnabledTileLine ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#EFEFF4"
            onValueChange={toggleSwitchTileLine}
            value={isEnabledTileLine}
          />
          <Text> Notes? </Text>
       </View>

        { isEnabledTileLine && <TextInput
          style={styles.textArea}
          placeholder="You can write your notes here"
          onChangeText={(text) => setName(text)}
          multiline={true}
        />}

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
      <Button title={"Next"} onPress={() => navigation.navigate("Chemicals")} />
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
