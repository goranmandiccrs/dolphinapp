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
import { useMst } from "../../state/RootModel";
import { Colors } from "react-native/Libraries/NewAppScreen";


export const Signature = observer(({ navigation }) => {
  const {
    signatureForm: {
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
      <View style={styles.container}>
      <Text style={styles.label}>Electronic signature of technician (initials)</Text>
        
      </View>
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
  photo: {
    // flexDirection: "row",
    // flex: 1,
    // width: 100,
    height: 100,
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D3D9EB",
  },

});
