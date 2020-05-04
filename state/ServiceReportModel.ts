import { getRoot, types } from "mobx-state-tree";
import { LegacyRef, useCallback } from "react";
import { RootType } from "./RootModel";

export const ServiceReportModel = types
  .model("Login", {
    reportDate: types.Date,
    reportTime: types.Date,
    name: "",
    note: "",
    isModalVisible: false,
  })
  .views((self) => {
    return {
      get time() {
        return `${self.reportTime.getHours()}:${self.reportTime.getMinutes()}`;
      },
    };
  })
  .actions((self) => {
    return {
      setReportDate(reportDate) {
        self.reportDate = reportDate;
      },
      setReportTime(reportTime) {
        self.reportTime = reportTime;
      },
      setName(name: string) {
        self.name = name;
      },
      setNote(note: string) {
        self.note = note;
      },
      onSubmit() {
      },
      showModal() {
        self.isModalVisible = true;
      },
      hideModal(navigation) {
        // self.isModalVisible = false;
        // navigation.navigate("ReportChoice");
      }
    };
  });
