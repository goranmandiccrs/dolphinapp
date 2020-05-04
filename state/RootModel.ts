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
    reportTime: new Date(),
    weatherRadioGroup: {
      options: [
        {
          id: "Rainy",
          text: "Rainy",
        },
        {
          id: "Partly Cloudy",
          text: "Partly Cloudy",
        },
        {
          id: "Cloudy",
          text: "Cloudy",
        },
        {
          id: "Sunny",
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
          id: "Yes_pumpConditionRadioGroup",
          text: "Yes",
        },
        {
          id: "No_pumpConditionRadioGroup",
          text: "No",
        },
        {
          id: "N/A_pumpConditionRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_pumpConditionRadioGroup",
    },
    filterConditionRadioGroup: {
      options: [
        {
          id: "Yes_filterConditionRadioGroup",
          text: "Yes",
        },
        {
          id: "No_filterConditionRadioGroup",
          text: "No",
        },
        {
          id: "N/A_filterConditionRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_filterConditionRadioGroup",
    },
    valvesConditionRadioGroup: {
      options: [
        {
          id: "Yes_valvesConditionRadioGroup",
          text: "Yes",
        },
        {
          id: "No_valvesConditionRadioGroup",
          text: "No",
        },
        {
          id: "N/A_valvesConditionRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_valvesConditionRadioGroup",
    },
    filterPressureRadioGroup: {
      options: [
        {
          id: "Yes_filterPressureRadioGroup",
          text: "Yes",
        },
        {
          id: "No_filterPressureRadioGroup",
          text: "No",
        },
        {
          id: "N/A_filterPressureRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_filterPressureRadioGroup",
    },
    othersRadioGroup: {
      options: [
        {
          id: "Yes_othersRadioGroup",
          text: "Yes",
        },
        {
          id: "No_othersRadioGroup",
          text: "No",
        },
        {
          id: "N/A_othersRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_othersRadioGroup",
    },
  },
  overallForm: {
    chlorinatorOperationalRadioGroup: {
      options: [
        {
          id: "Yes_chlorinatorOperationalRadioGroup",
          text: "Yes",
        },
        {
          id: "No_chlorinatorOperationalRadioGroup",
          text: "No",
        },
        {
          id: "N/A_chlorinatorOperationalRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_chlorinatorOperationalRadioGroup",
    },
    gaguesRadioGroup: {
      options: [
        {
          id: "Yes_gaguesRadioGroup",
          text: "Yes",
        },
        {
          id: "No_gaguesRadioGroup",
          text: "No",
        },
        {
          id: "N/A_gaguesRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_gaguesRadioGroup",
    },
    hamzatRadioGroup: {
      options: [
        {
          id: "Yes_hamzatRadioGroup",
          text: "Yes",
        },
        {
          id: "No_hamzatRadioGroup",
          text: "No",
        },
        {
          id: "N/A_hamzatRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_hamzatRadioGroup",
    },
    msdsRadioGroup: {
      options: [
        {
          id: "Yes_msdsRadioGroup",
          text: "Yes",
        },
        {
          id: "No_msdsRadioGroup",
          text: "No",
        },
        {
          id: "N/A_msdsRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_msdsRadioGroup",
    },
    waterLeakRadioGroup: {
      options: [
        {
          id: "Yes_waterLeakRadioGroup",
          text: "Yes",
        },
        {
          id: "No_waterLeakRadioGroup",
          text: "No",
        },
        {
          id: "N/A_waterLeakRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_waterLeakRadioGroup",
    },
    filterBackwashedRadioGroup: {
      options: [
        {
          id: "Yes_filterBackwashedRadioGroup",
          text: "Yes",
        },
        {
          id: "No_filterBackwashedRadioGroup",
          text: "No",
        },
        {
          id: "N/A_filterBackwashedRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_filterBackwashedRadioGroup",
    },
    cartrigesWashedRadioGroup: {
      options: [
        {
          id: "Yes_cartrigesWashedRadioGroup",
          text: "Yes",
        },
        {
          id: "No_cartrigesWashedRadioGroup",
          text: "No",
        },
        {
          id: "N/A_cartrigesWashedRadioGroup",
          text: "N/A",
        },
      ],
      selectedOption: "Yes_cartrigesWashedRadioGroup",
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
export interface RootType extends Instance<typeof rootStore> {}
