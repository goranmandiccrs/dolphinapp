import { getRoot, types } from "mobx-state-tree";
import { LegacyRef, useCallback } from "react";
import { RootType } from "./RootModel";
import { ClientModel } from "./MaintenanceReportModel";
import { fetch } from "whatwg-fetch";
import { URLs } from "./URLs";

export const ServiceReportModel = types
  .model("Login", {
    reportTime: types.Date,
    name: "",
    note: "",
    isModalVisible: false,
    beforeImageBase64: "",
    afterImageBase64: "",
    selectedClient: types.maybeNull(types.reference(ClientModel)),
  })
  .views((self) => {
    return {
      get time() {
        return `${new Date().getHours()}:${new Date().getMinutes()}`;
      },
    };
  })
  .actions((self) => {
    return {
      selectClient(client) {
        self.selectedClient = client.id;
      },

      setNote(note: string) {
        self.note = note;
      },
      onSubmit() {
        const root: RootType = getRoot(self);
        const formData = new FormData();

        const data =  {
          clientID: self.selectedClient?._id,
          note: self.note,
          dateTime: new Date(),
        }
        formData.append("data", JSON.stringify(data));
        formData.append("pictureBefore",self.beforeImageBase64);
        formData.append("pictureAfter",self.afterImageBase64);
        fetch(URLs.createServiceReport, {
          method: "POST",
          headers: {
            authorization: `Bearer ${root.loginForm.token}`,
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        })
      },
      showModal() {
        self.isModalVisible = true;
      },
      hideModal(navigation) {
        // self.isModalVisible = false;
        // navigation.navigate("ReportChoice");
      },
      setBeforeImage(uploadImage) {
        self.beforeImageBase64 = uploadImage;
      },
      setAfterImage(uploadImage) {
        self.afterImageBase64 = uploadImage;
      },
    };
  });
