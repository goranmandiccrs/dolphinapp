import { observer } from "mobx-react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";


import React, { useState } from "react";
import { useMst } from "../state/RootModel";
//@ts-ignore
import Upload from "../assets/camera.svg";
//@ts-ignore
import Picture from "../assets/picture.svg";
import PhotoUpload from "react-native-photo-upload";
import LinearGradient from 'react-native-linear-gradient';

export const ServiceReport = observer(({ navigation }) => {
  const {
    serviceReportForm: {
      hideModal,
      isDatePickerVisible,
      isModalVisible,
      isTimePickerVisible,
      onChange,
      onFocusDatePicker,
      onFocusTimePicker,
      onSubmit,
      setName,
      reportDate,
      reportTime,
      time,
    },
  } = useMst();

  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Text>Pool Name / Address</Text>
        <TextInput onChangeText={(text) => setName(text)} />
        
        <Text style={styles.label}>Date & Time</Text>
        <Text style={[styles.input, {color: "rgba(85, 87, 94, 0.4)", borderRadius: 5, }]} onPress={onFocusDatePicker}>{reportDate.toDateString()}, {time}</Text>


        <Text style={styles.label}>Leave a Note</Text>
          <TextInput
            style={styles.textArea}
            onChangeText={(text) => setName(text)}
          />

        <View style={styles.upload} />

        <PhotoUpload photoPickerTitle={"Select photo"}>
            <Upload />
          <Picture />
        </PhotoUpload>

        {/* <Button title={"Submit"} onPress={onSubmit} /> */}

        <LinearGradient 
              start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
              colors={['#5B70B8', '#7360B8']} 
              style={styles.linearGradient}
            >
      
          <Text style={styles.buttonText} onPress={onSubmit}>
          Submit
          </Text>
        </LinearGradient>
      </View>


      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Successfully submitted!</Text>

            <TouchableHighlight onPress={() => hideModal(navigation)}>
              <Text>Back to home</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
});


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: { 
    marginTop: 50, 
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 281,
    width: "100%" 
  },
  titleText: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: "bold",
    letterSpacing: 0.41,
    marginBottom: 48,
    marginTop: 88,
  },
  baseText: {
    fontFamily: "Cochin",
    fontSize: 20,
    marginBottom: 40,
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
  linearGradient: {
    marginTop: 31,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
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
  link: {
    color: "#745FB8",
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
});