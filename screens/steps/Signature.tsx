import { observer } from "mobx-react";
import { Text, View, StyleSheet, ScrollView, Image, Modal, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import { useMst } from "../../state/RootModel";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ReactSignature } from "../../index";

export const Signature = observer(({ navigation }) => {
  const {
    signatureForm: { signatureRef, savedImagePath, onSubmit, isModalVisible, showModal, hideModal },
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
            onPress={() => {
              //@ts-ignore
              signatureRef.saveImage();
              setTimeout(() => {
                onSubmit();
              }, 300);
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
  );
});
