/**
 * @format
 */

import { AppRegistry, StyleSheet, View } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import React from "react";
import SignatureCapture from "react-native-signature-capture";
import { useMst } from "./state/RootModel";
import { observer } from "mobx-react";

export const ReactSignature = observer(({ onDragEvent }) => {
  const {
    signatureForm: { useHookWithSignatureCallback, onSaveImage },
  } = useMst();
  const styles2 = StyleSheet.create({
    signature: {
      flex: 1,
      flexDirection: "column",
      borderColor: "#000033",
      borderWidth: 1,
      height: 200,
    },
  });

  const [ref] = useHookWithSignatureCallback();

  return (
    <View>
      <SignatureCapture
        ref={ref}
        style={[{ flex: 1 }, styles2.signature]}
        onSaveEvent={onSaveImage}
        onDragEvent={onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        viewMode={"portrait"}
      />
    </View>
  );
});

AppRegistry.registerComponent("ReactSignature", () => ReactSignature);
AppRegistry.registerComponent(appName, () => App);
