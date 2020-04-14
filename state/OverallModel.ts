import { types } from "mobx-state-tree";

export const OverallModel = types
  .model("Login", {
    chlorinatorOperational: "",
    chlorinatorOperationalAdditional: "",
    gagues: "",
    gaguesAdditional: "",
    hamzat: "",
    hamzatAdditional: "",
    msds: "",
    msdsAdditional: "",
    waterLeak: "",
    waterLeakAdditional: "",
    filterBackwashed: "",
    filterBackwashedAdditional: "",
    cartrigesWashed: "",
    cartrigesWashedAdditional: "",
  })
  
  .actions((self) => {
    return {
      setChlorinatorOperational(chlorinatorOperational: string) {
        self.chlorinatorOperational = chlorinatorOperational;
      },
      setChlorinatorOperationalAdditional(chlorinatorOperationalAdditional: string) {
        self.chlorinatorOperationalAdditional = chlorinatorOperationalAdditional;
      },
      setGagues(gagues: string) {
        self.gagues = gagues;
      },
      setGaguesAdditional(gaguesAdditional: string) {
        self.gaguesAdditional = gaguesAdditional;
      },
      setHamzat(hamzat: string) {
        self.hamzat = hamzat;
      },
      setHamzatAdditional(hamzatAdditional: string) {
        self.hamzatAdditional = hamzatAdditional;
      },
      setMsds(msds: string) {
        self.msds = msds;
      },
      setMsdsAdditional(msdsAdditional: string) {
        self.msdsAdditional = msdsAdditional;
      },
      setWaterLeak(waterLeak: string) {
        self.waterLeak = waterLeak;
      },
      setWaterLeakAdditional(waterLeakAdditional: string) {
        self.waterLeakAdditional = waterLeakAdditional;
      },
      setFilterBackwashed(filterBackwashed: string) {
        self.filterBackwashed = filterBackwashed;
      },
      setFilterBackwashedAdditional(filterBackwashedAdditional: string) {
        self.filterBackwashedAdditional = filterBackwashedAdditional;
      },
      setCartrigesWashed(cartrigesWashed: string) {
        self.cartrigesWashed = cartrigesWashed;
      },
      setCartrigesWashedAdditional(cartrigesWashedAdditional: string) {
        self.cartrigesWashedAdditional = cartrigesWashedAdditional;
      },
      
    };
  });
