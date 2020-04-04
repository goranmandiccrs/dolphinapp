import { observer } from "mobx-react";

import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
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
      <ImageBackground
        source={require("../assets/login-bg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          />
          <Logo style={styles.logo} />

          <Text style={styles.titleText}>Welcome to our field report app.</Text>

          <Text style={styles.baseText}>
            Enter your email address and password to access your account.
          </Text>

          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Password"
          />
          <Button
            onPress={() => navigation.navigate("ReportChoice")}
            // ViewComponent={LinearGradient}
            // linearGradientProps={{
            //   colors: ['red', 'pink'],
            //   start: { x: 0, y: 0.5 },
            //   end: { x: 1, y: 0.5 },
            // }}
            title="Login"
          />
          {/* <Button onPress={() => {}} title="Contact us" color="#745FB8" /> */}
          {/* <GradientButton text="Purple Violet" width='90%' purpleViolet impact /> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  logo: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 281,
    width: "100%",
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
  input: {
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D9EB",
    padding: 12,
    marginBottom: 8,
  },
  linearGradient: {},
  buttonText: {},
  link: {
    color: "#745FB8",
  },
});
