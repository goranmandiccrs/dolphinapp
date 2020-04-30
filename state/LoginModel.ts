import { types } from "mobx-state-tree";
import { fetch } from "whatwg-fetch";
import { headers, URLs } from "./URLs";

export const LoginModel = types
  .model("Login", {
/*    email: "",
    password: "",*/
    email: "",
    password: "",
    result: "",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjJlMDA4MjcwMTYyNTY0NDY0MzQ5YSIsImlhdCI6MTU4ODIzNzcyNX0.w6b3469xOPdvkVqRU1Di7A__ZusPvHiC_9L5XW2BUZs",
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
      setToken(token: string): void {
        self.token = token;
      },
      submitLogin(email, password) {
        return new Promise((resolve, reject) => {
          fetch(URLs.login, {
            headers,
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }).then((response) => {
            response.json().then((result) => {
              if (!result.error && result.token) {

                this.setToken(result.token);
                resolve();
              } else {
                console.log(result.error.msg);
                reject(result.error.msg);
              }
            });
          });
        });
      },
    };
  });
