import { types } from "mobx-state-tree";
import {RadioGroupModel} from "../components/RadioGroupModel";

export const EquipmentModel = types
  .model("Login", {
    pumpConditionRadioGroup: RadioGroupModel,
    pumpConditionAdditional: "",
    filterConditionRadioGroup: RadioGroupModel,
    filterConditionAdditional: "",
    valvesConditionRadioGroup: RadioGroupModel,
    valvesConditionAdditional: "",
    filterPressureRadioGroup: RadioGroupModel,
    filterPressureAdditional: "",
    othersRadioGroup: RadioGroupModel,
    othersAdditional: "",
  })

  .actions((self) => {
    return {

      setPumpConditionAdditional(pumpConditionAdditional: string) {
        self.pumpConditionAdditional = pumpConditionAdditional;
      },


      setFilterConditionAdditional(filterConditionAdditional: string) {
        self.filterConditionAdditional = filterConditionAdditional;
      },

      setValvesConditionAdditional(valvesConditionAdditional: string) {
        self.valvesConditionAdditional = valvesConditionAdditional;
      },

      setFilterPressureAdditional(filterPressureAdditional: string) {
        self.filterPressureAdditional = filterPressureAdditional;
      },
      setOthersAdditional(othersAdditional: string) {
        self.othersAdditional = othersAdditional;
      },

      onSubmit() {}
    };
  });
