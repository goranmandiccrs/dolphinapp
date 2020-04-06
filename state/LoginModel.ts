import { types } from "mobx-state-tree";
import { Alert } from "react-native";
import { fetch } from "whatwg-fetch";

export const LoginModel = types
  .model("Login", {
    email: "",
    password: "",
    result: "",
  })
  .actions((self) => {
    return {
      setResult(result) {
        self.result = result;
      },
      setEmail(email: string) {
        // Alert.alert(email);
        self.email = email;
      },
      setPassword(password: string) {
        self.password = password;
      },
      submitLogin(email, password) {
        /*const random = Math.random();
        const that = this;
        return new Promise((resolve, reject) => {
          if (random > 0.5) {
            setTimeout(() => {
              that.setResult("Success");
              resolve();
            }, 1000);
          } else {
            setTimeout(() => {
              that.setResult("Failde");
              reject();
            }, 1000);
          }
        });*/
        const that = this;
        fetch("/users.html", {
          method: "POST",
          body: {
            email,
            password,
          },
        })
          .then(() => {})
          .catch(() => {
            that.setResult("Failed");
          });
      },
    };
  });
