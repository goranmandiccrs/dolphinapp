import { observer } from "mobx-react";
import { Button, Image, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { useMst } from "../state/RootModel";
import RNDateTimePicker from "@react-native-community/datetimepicker";
//@ts-ignore
import Upload from "../assets/camera.svg";
//@ts-ignore
import Picture from "../assets/picture.svg";
import PhotoUpload from "react-native-photo-upload";

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

  const styles = {
    upload: {},
  };
  return (
    <>
      <View>
        <Text>Pool Name / Address</Text>
        <TextInput onChangeText={(text) => setName(text)} />
        <Text>Date</Text>
        <Text onPress={onFocusDatePicker}>{reportDate.toDateString()}</Text>
        <Text>Time</Text>
        <Text onPress={onFocusTimePicker}>{time}</Text>

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
        <View style={styles.upload}>
        </View>
      </View>
      <PhotoUpload photoPickerTitle={"Select photo"}>
            <Upload />
          <Picture />
      </PhotoUpload>
    </>
  );
});
