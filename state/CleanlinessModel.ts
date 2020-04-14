import { types } from "mobx-state-tree";

export const CleanlinessModel = types
  .model("Login", {
    poolClarity: "",
    poolClarityAdditional: "",

    spaClarity: "",
    spaClarityAdditional: "",

    poolBottomVacuumed: "",
    poolBottomVacuumedAdditional: "",

    skimmer: "",
    skimmerAdditional: "",

    blowPoolDeck: "",
    blowPoolDeckAdditional: "",

    poolPump: "",
    poolPumpAdditional: "",

    mainPoolCleanliness: "",
    mainPoolCleanlinessAdditional: "",

    spaCleanliness: "",
    spaCleanlinessAdditional: "",

    hairStrainer: "",
    hairStrainerAdditional: "",

    tileLine: "",
    tileLineAdditional: "",
  })
  .actions((self) => {
    return {
      setPoolClarity(poolClarity: string) {
        self.poolClarity = poolClarity;
      },
      setPoolClarityAdditional(poolClarityAdditional: string) {
        self.poolClarityAdditional = poolClarityAdditional;
      },

      setSpaClarity(spaClarity: string) {
        self.spaClarity = spaClarity;
      },
      setSpaClarityAdditional(spaClarityAdditional: string) {
        self.spaClarityAdditional = spaClarityAdditional;
      },
      
      setPoolBottomVacuumed(poolBottomVacuumed: string) {
        self.poolBottomVacuumed = poolBottomVacuumed;
      },
      setPoolBottomVacuumedAdditional(poolBottomVacuumedAdditional: string) {
        self.poolBottomVacuumedAdditional = poolBottomVacuumedAdditional;
      },
      setSkimmer(skimmer: string) {
        self.skimmer = skimmer;
      },
      setSkimmerAdditional(skimmerAdditional: string) {
        self.skimmerAdditional = skimmerAdditional;
      },
      setBlowPoolDeck(blowPoolDeck: string) {
        self.blowPoolDeck = blowPoolDeck;
      },
      setBlowPoolDeckAdditional(blowPoolDeckAdditional: string) {
        self.blowPoolDeckAdditional = blowPoolDeckAdditional;
      },

      setPoolPump(poolPump: string) {
        self.poolPump = poolPump;
      },
      setPoolPumpAdditional(poolPumpAdditional: string) {
        self.poolPumpAdditional = poolPumpAdditional;
      },

      setMainPoolCleanliness(mainPoolCleanliness: string) {
        self.mainPoolCleanliness = mainPoolCleanliness;
      },
      setMainPoolCleanlinessAdditional(mainPoolCleanlinessAdditional: string) {
        self.mainPoolCleanlinessAdditional = mainPoolCleanlinessAdditional;
      },
      
      setSpaCleanliness(spaCleanliness: string) {
        self.spaCleanliness = spaCleanliness;
      },
      setSpaCleanlinessAdditional(spaCleanlinessAdditional: string) {
        self.spaCleanlinessAdditional = spaCleanlinessAdditional;
      },

      setHairStrainer(hairStrainer: string) {
        self.hairStrainer = hairStrainer;
      },
      setHairStrainerAdditional(hairStrainerAdditional: string) {
        self.hairStrainerAdditional = hairStrainerAdditional;
      },
      
      setTileLine(tileLine: string) {
        self.tileLine = tileLine;
      },
      setTileLineAdditional(tileLineAdditional: string) {
        self.tileLineAdditional = tileLineAdditional;
      },
     
      onSubmit() {
        
      },
      
    };
  });
