import { types } from "mobx-state-tree";
import { boolean } from "mobx-state-tree/dist/internal";

export const EquipmentModel = types
  .model("Login", {
    pumpCondition: "",
    pumpConditionAdditional: "",
    filterCondition: "",
    filterConditionAdditional: "",
    valvesCondition: "",
    valvesConditionAdditional: "",
    others: "",
    othersAdditional: "",
  })
  
  .actions((self) => {
    return {
      setPumpCondition(pumpCondition: string) {
        self.pumpCondition = pumpCondition;
      },
      setPumpConditionAdditional(pumpConditionAdditional: string) {
        self.pumpConditionAdditional = pumpConditionAdditional;
      },

      setFilterCondition(filterCondition: string) {
        self.filterCondition = filterCondition;
      },
      setFilterConditionAdditional(filterConditionAdditional: string) {
        self.filterConditionAdditional = filterConditionAdditional;
      },

      setValvesCondition(valvesCondition: string) {
        self.valvesCondition = valvesCondition;
      },
      setValvesConditionAdditional(valvesConditionAdditional: string) {
        self.valvesConditionAdditional = valvesConditionAdditional;
      },

      setOthers(others: string) {
        self.others = others;
      },
      setOthersAdditional(othersAdditional: string) {
        self.othersAdditional = othersAdditional;
      },
      
      onSubmit() {}
    };
  });
