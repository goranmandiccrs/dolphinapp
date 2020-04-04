import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { LoginModel } from "./LoginModel";
import { ServiceReportModel } from "./ServiceReportModel";
import { MaintenanceReportModel } from "./MaintenanceReportModel";
import { CleanlinessModel } from "./CleanlinessModel";
import { ChemicalsModel } from "./ChemicalsModel";
import { EquipmentModel } from "./EquipmentModel";
import { OverallModel } from "./OverallModel";
import { NoteModel } from "./NoteModel";
import { SignatureModel } from "./SignatureModel";

export const RootModel = types.model("Root", {
  loginForm: LoginModel,
  serviceReportForm: ServiceReportModel,
  maintenanceReportForm: MaintenanceReportModel,
  cleanlinessForm: CleanlinessModel,
  chemicalsForm: ChemicalsModel,
  equipmentForm: EquipmentModel,
  overallForm: OverallModel,
  noteForm: NoteModel,
  signatureForm: SignatureModel,
});

export const rootStore = RootModel.create({
  loginForm: {},
  serviceReportForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  maintenanceReportForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  cleanlinessForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  chemicalsForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  equipmentForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  overallForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  noteForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
  signatureForm: {
    reportDate: new Date(),
    reportTime: new Date(),
  },
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(rootStore);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store as RootInstance;
}
