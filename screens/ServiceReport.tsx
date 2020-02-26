import { observer } from "mobx-react";
import { Button, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { useMst } from "../state/RootModel";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export const ServiceReport = observer(({ navigation }) => {
  const {
    serviceReportForm: {
      hideDatePicker,
      hideTimePicker,
      showDatePicker,
      showTimePicker,
      isDatePickerVisible,
      isTimePickerVisible,
      onChange,
      onFocusDatePicker,
      onFocusTimePicker,
      setName,
      reportDate,
      reportTime,
      time,
    },
  } = useMst();

  return (
    <View>
      <Text>Pool Name / Address</Text>
      <TextInput onChangeText={(text) => setName(text)} />
      <Text>Date</Text>
      <Text onPress={onFocusDatePicker}>{reportDate.toDateString()}</Text>
      <Text>Time</Text>
      <Text onPress={onFocusTimePicker}>{time}</Text>

      {/*<View>
        <Button onPress={showDatePicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimePicker} title="Show time picker!" />
      </View>*/}
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
  );
});
