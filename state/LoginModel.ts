import { types } from "mobx-state-tree";
import {Alert} from "react-native";

export const LoginModel = types
  .model("Login", {
    email: "",
    password: "",
  })
  .actions((self) => {
    return {
      setEmail(email: string) {
        // Alert.alert(email);
        self.email = email;
      },
      setPassword(password: string) {
        self.password = password;
      },
    };
  });
