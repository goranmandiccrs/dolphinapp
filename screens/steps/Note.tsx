import { observer } from "mobx-react";
import {
  Text,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
import { useMst } from "../../state/RootModel";
import { Colors } from "react-native/Libraries/NewAppScreen";
//@ts-ignore
import Upload from "../../assets/camera.svg";
//@ts-ignore
import Picture from "../../assets/picture.svg";
import PhotoUpload from "react-native-photo-upload";

export const Note = observer(({ navigation }) => {
  const {
    noteForm: { setLeaveNote, setBeforeImage, setAfterImage, beforeImageBase64, afterImageBase64 },
  } = useMst();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Leave a Note</Text>
        <TextInput
          style={styles.textArea}
          onChangeText={(text) => setLeaveNote(text)}
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
            onPress={() => navigation.navigate("Signature")}
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
  container: {
    padding: 20,
    paddingTop: 56,
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
    marginBottom: 15,
    height: 129,
    textAlignVertical: "top",
  },
  photo: {
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    borderRadius: 10,
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
    textAlign: "center",
    fontFamily: "AcuminPro-Bold",
    paddingTop: 18,
    paddingBottom: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
