import { observer } from "mobx-react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
import { useMst } from "../../state/RootModel";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ReactSignature } from "../../index";

export const Signature = observer(({ navigation }) => {
  const {
    signatureForm: {
      signatureRef,
      savedImagePath,
    },
  } = useMst();

  const styles = StyleSheet.create({
    flex: {
      flexDirection: "row",
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>
          Electronic signature of technician (initials)
        </Text>
        <ReactSignature onDragEvent={() => {}} />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#5B70B8", "#7360B8"]}
          style={styles.linearGradient}
        >
          <Text
            style={styles.buttonText}
            //@ts-ignore
            onPress={() => signatureRef.saveImage()}
          >
            Submit
          </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
});
