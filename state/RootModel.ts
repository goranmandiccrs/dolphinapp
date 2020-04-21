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
    weatherRadioGroup: {
      options: [
        {
          text: "Rainy",
        },
        {
          text: "Partly Cloudy",
        },
        {
          text: "Cloudy",
        },
        {
          text: "Sunny",
        },
      ],
      selectedOption: "Rainy",
    },
  },
  cleanlinessForm: {},
  chemicalsForm: {},
  equipmentForm: {
    pumpConditionRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    filterConditionRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    valvesConditionRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    filterPressureRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    othersRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
  },
  overallForm: {
    chlorinatorOperationalRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    gaguesRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    hamzatRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    msdsRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    waterLeakRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    filterBackwashedRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
    cartrigesWashedRadioGroup: {
      options: [
        {
          text: "Yes",
        },
        {
          text: "No",
        },
        {
          text: "N/A",
        },
      ],
      // selectedOption: "Yes",
    },
  },
  noteForm: {},
  signatureForm: {},
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
