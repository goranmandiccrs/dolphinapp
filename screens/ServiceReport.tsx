import { observer } from "mobx-react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

import React, { useState } from "react";
import { useMst } from "../state/RootModel";
//@ts-ignore
import Upload from "../assets/camera.svg";
//@ts-ignore
import Picture from "../assets/picture.svg";
import PhotoUpload from "react-native-photo-upload";
import LinearGradient from "react-native-linear-gradient";
import { ServiceReportDropdown } from "./ServiceReportDropdown";

export const ServiceReport = observer(({ navigation }) => {
  const {
    serviceReportForm: {
      setNote,
      hideModal,
      onSubmit,
      reportTime,
      time,
      isModalVisible,
      showModal,
      setBeforeImage,
      setAfterImage,
      beforeImageBase64,
      afterImageBase64,
    },
  } = useMst();

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Pool Name / Address</Text>
          <ServiceReportDropdown />

          <Text style={styles.label}>Date & Time</Text>
          <Text
            style={[
              styles.input,
              { color: "rgba(85, 87, 94, 0.4)", borderRadius: 5 },
            ]}
          >
            {reportTime.toDateString()}, {time}
          </Text>

          <Text style={styles.label}>Leave a Note</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.textArea}
            onChangeText={(text) => setNote(text)}
          />

          <View style={styles.flex}>
          <View style={[styles.uploadWrapper, {marginRight: 5},]}>
            <Text style={styles.label}>Before</Text>
            <PhotoUpload
              containerStyle={styles.photo}
              photoPickerTitle={"Select photo"}
              onPhotoSelect={(avatar) => {
                if (avatar) {
                  setBeforeImage(avatar);
                }
              }}
            >
              <View style={styles.flex}>
                <Upload />
                <Picture style={{marginLeft: 6,}}/>
              </View>
            
              {!!beforeImageBase64 && (
                <Image
                  style={styles.logo}
                  source={{
                    uri: `data:image/png;base64,${beforeImageBase64}`,
                  }}
                />
              )}
            </PhotoUpload>
          </View>

          <View style={[styles.uploadWrapper, {marginLeft: 5},]}>
          <Text style={styles.label}>After</Text>
            <PhotoUpload
              containerStyle={styles.photo}
              photoPickerTitle={"Select photo"}
              onPhotoSelect={(avatar) => {
                if (avatar) {
                  setAfterImage(avatar);
                }
              }}
            >
              <View style={styles.flex}>
                <Upload />
                <Picture style={{marginLeft: 6,}}/>
              </View>
              {!!afterImageBase64 && (
                <Image
                  style={styles.logo}
                  source={{
                    uri: `data:image/png;base64,${afterImageBase64}`,
                  }}
                />
              )}
            </PhotoUpload>
          </View>
        </View>
          

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#5B70B8", "#7360B8"]}
            style={styles.linearGradient}
          >
            <Text
              style={styles.buttonText}
              onPress={() => {
                onSubmit();
                showModal();
              }}
            >
              Submit
            </Text>
          </LinearGradient>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
        >
           <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Your report has been submitted successfully!</Text>

              <TouchableHighlight style={styles.openButton} onPress={() => hideModal(navigation)}>
                <Text style={styles.textStyle}>Back to home</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadWrapper: {
    flex: 1,
  },
  logo: {
    width: 66,
    height: 58,
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
    textAlign: "center",
    fontFamily: "AcuminPro-Bold",
    paddingTop: 18,
    paddingBottom: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
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
    textAlignVertical: "top",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(196,196, 196, 0.7)",
    // opacity: .7,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    paddingTop: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: "100%",
    borderTopWidth: 0.5,
    borderTopColor: "rgba(000,000, 000, .2)",
  },
  textStyle: {
    color: "#745FB8",
    textAlign: "center",
    fontFamily: "AcuminPro-Bold",
  },
  modalText: {
    marginBottom: 22,
    textAlign: "center"
  }
});
