import { getRoot, types } from "mobx-state-tree";
import { RadioGroupModel } from "../components/RadioGroupModel";
import { fetch } from "whatwg-fetch";
import { URLs } from "./URLs";
import { RootType } from "./RootModel";

export const ClientModel = types.model("Client", {
  _id: types.identifier,
  address: "",
  firstName: "",
  lastName: "",
});

export const MaintenanceReportModel = types
  .model("Login", {
    clients: types.map(ClientModel),
    poolName: "",
    technicianName: "",
    numberOfBathers: types.maybeNull(types.number),
    reportTime: types.Date,
    setWeather: "",
    selectedClient: types.maybeNull(types.reference(ClientModel)),
    weatherRadioGroup: RadioGroupModel,
  })
  .views((self) => {
    return {
      get time() {
        let hours = self.reportTime.getHours();
        let minutes: number | string = self.reportTime.getMinutes();
        let ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return hours + ":" + minutes + " " + ampm;
      },
      get clientsDataArray() {
        return Array.from(self.clients.values()).map((client) => {
          return {
            id: client._id,
            name: `${client.firstName} ${client.lastName} - ${client.address}`,
          };
        });
      },
    };
  })
  .actions((self) => {
    return {
      increaseNumberValue(value, maxValue): void {
        self[value] = Math.min(self[value] + 1, maxValue);
      },
      decreaseNumberValue(value, minValue): void {
        self[value] = Math.max(self[value] - 1, minValue);
      },
      getClients() {
        const root: RootType = getRoot(self);

        return fetch(URLs.getClients, {
          headers: {
            authorization: `Bearer ${root.loginForm.token}`,
          },
        }).then((response) => {
          response.json().then((result) => {
            if (!result.error) {
              this.setClients(result.data);
            } else {
              console.log(result.error.msg);
            }
          });
        });
      },
      setClients(clients) {
        clients.forEach((client) => {
          self.clients.put(client);
        });
      },
      selectClient(client) {
        self.selectedClient = client.id;
      },

      setPoolName(poolName: string) {
        self.poolName = poolName;
      },

      setNumberOfBathers(numberOfBathers: number) {
        self.numberOfBathers = numberOfBathers;
      },

    };
  });
