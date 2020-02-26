import { observer } from "mobx-react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

//@ts-ignore
import Logo from "../assets/logo.svg";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useMst } from "../state/RootModel";

export const LoginScreen = observer(({ navigation }) => {
  const {
    loginForm: { setEmail, setPassword },
  } = useMst();
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      />
      <Logo />
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>Welcome to our field report app.</Text>
      </Text>
      <Text>Enter your email address and password to access your account.</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <Button onPress={() => navigation.navigate("ReportChoice")} title="Login" />
      <Button onPress={() => {}} title="Contact us" />
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  logo: { marginTop: 50, width: "100%" },
  baseText: {
    fontFamily: "Cochin",
    marginVertical: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});
