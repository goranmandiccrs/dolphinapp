import { types } from "mobx-state-tree";
import {RadioGroupModel} from "../components/RadioGroupModel";

export const MaintenanceReportModel = types
  .model("Login", {
    setPoolName: "",
    setTechnicianName: "",
    numberOfBathers: "",
    reportDate: types.Date,
    reportTime: types.Date,
    setWeather: "",
    weatherRadioGroup: RadioGroupModel,
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
      setPoolName(setPoolName: string) {
        self.setPoolName = setPoolName;
      },
      setTechnicianName(setTechnicianName: string) {
        self.setTechnicianName = setTechnicianName;
      },
      numberOfBathers(numberOfBathers: string) {
        self.numberOfBathers = numberOfBathers;
      },
      setReportDate(reportDate) {
        self.reportDate = reportDate;
      },
      setReportTime(reportTime) {
        self.reportTime = reportTime;
      },
      // setWeather(setWeather) {
      //   self.setWeather = setWeather;
      // },
    };
  });
