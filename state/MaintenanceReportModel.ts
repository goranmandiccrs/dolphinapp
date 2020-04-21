import { types } from "mobx-state-tree";
import {RadioGroupModel} from "../components/RadioGroupModel";

export const MaintenanceReportModel = types
  .model("Login", {
    poolName: "",
    technicianName: "",
    numberOfBathers: types.maybeNull(types.number),
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
      increaseNumberValue(value, maxValue): void {
        self[value] = Math.min(self[value] + 1, maxValue);
      },
      decreaseNumberValue(value, minValue): void {
        self[value] = Math.max(self[value] - 1, minValue);
      },


      setPoolName(poolName: string) {
        self.poolName = poolName;
      },
      setTechnicianName(technicianName: string) {
        self.technicianName = technicianName;
      },
      setNumberOfBathers(numberOfBathers: number) {
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
