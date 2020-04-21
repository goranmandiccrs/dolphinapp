import { types } from "mobx-state-tree";
import {RadioGroupModel} from "../components/RadioGroupModel";

export const OverallModel = types
  .model("Login", {
    chlorinatorOperationalRadioGroup: RadioGroupModel,
    chlorinatorOperationalAdditional: "",
    gaguesRadioGroup: RadioGroupModel,
    gaguesAdditional: "",
    hamzatRadioGroup: RadioGroupModel,
    hamzatAdditional: "",
    msdsRadioGroup: RadioGroupModel,
    msdsAdditional: "",
    waterLeakRadioGroup: RadioGroupModel,
    waterLeakAdditional: "",
    filterBackwashedRadioGroup: RadioGroupModel,
    filterBackwashedAdditional: "",
    cartrigesWashedRadioGroup: RadioGroupModel,
    cartrigesWashedAdditional: "",
  })
  
  .actions((self) => {
    return {
      
      setChlorinatorOperationalAdditional(chlorinatorOperationalAdditional: string) {
        self.chlorinatorOperationalAdditional = chlorinatorOperationalAdditional;
      },
      setGaguesAdditional(gaguesAdditional: string) {
        self.gaguesAdditional = gaguesAdditional;
      },
      setHamzatAdditional(hamzatAdditional: string) {
        self.hamzatAdditional = hamzatAdditional;
      },
      setMsdsAdditional(msdsAdditional: string) {
        self.msdsAdditional = msdsAdditional;
      },
      setWaterLeakAdditional(waterLeakAdditional: string) {
        self.waterLeakAdditional = waterLeakAdditional;
      },
      setFilterBackwashedAdditional(filterBackwashedAdditional: string) {
        self.filterBackwashedAdditional = filterBackwashedAdditional;
      },
      setCartrigesWashedAdditional(cartrigesWashedAdditional: string) {
        self.cartrigesWashedAdditional = cartrigesWashedAdditional;
      },
      
    };
  });
