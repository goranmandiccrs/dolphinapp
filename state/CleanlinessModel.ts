import { types } from "mobx-state-tree";

export const CleanlinessModel = types
  .model("Login", {
    poolClarity: types.maybeNull(types.number),
    poolClarityAdditional: "",

    spaClarity: types.maybeNull(types.number),
    spaClarityAdditional: "",

    poolBottomVacuumed: types.maybeNull(types.number),
    poolBottomVacuumedAdditional: "",

    skimmer: types.maybeNull(types.number),
    skimmerAdditional: "",

    blowPoolDeck: types.maybeNull(types.number),
    blowPoolDeckAdditional: "",

    poolPump: types.maybeNull(types.number),
    poolPumpAdditional: "",

    mainPoolCleanliness: types.maybeNull(types.number),
    mainPoolCleanlinessAdditional: "",

    spaCleanliness: types.maybeNull(types.number),
    spaCleanlinessAdditional: "",

    hairStrainer: types.maybeNull(types.number),
    hairStrainerAdditional: "",

    tileLine: types.maybeNull(types.number),
    tileLineAdditional: "",
  })
  .actions((self) => {
    return {
      increaseNumberValue(value, maxValue): void {
        self[value] = Math.min(self[value] + 1, maxValue);
      },
      decreaseNumberValue(value, minValue): void {
        self[value] = Math.max(self[value] - 1, minValue);
      },
      
      setPoolClarity(poolClarity: number) {
        self.poolClarity = poolClarity;
      },
      setPoolClarityAdditional(poolClarityAdditional: string) {
        self.poolClarityAdditional = poolClarityAdditional;
        console.log(self.poolClarityAdditional);
      },

      setSpaClarity(spaClarity: number) {
        self.spaClarity = spaClarity;
      },
      setSpaClarityAdditional(spaClarityAdditional: string) {
        self.spaClarityAdditional = spaClarityAdditional;
      },

      setPoolBottomVacuumed(poolBottomVacuumed: number) {
        self.poolBottomVacuumed = poolBottomVacuumed;
      },
      setPoolBottomVacuumedAdditional(poolBottomVacuumedAdditional: string) {
        self.poolBottomVacuumedAdditional = poolBottomVacuumedAdditional;
      },
      setSkimmer(skimmer: number) {
        self.skimmer = skimmer;
      },
      setSkimmerAdditional(skimmerAdditional: string) {
        self.skimmerAdditional = skimmerAdditional;
      },
      setBlowPoolDeck(blowPoolDeck: number) {
        self.blowPoolDeck = blowPoolDeck;
      },
      setBlowPoolDeckAdditional(blowPoolDeckAdditional: string) {
        self.blowPoolDeckAdditional = blowPoolDeckAdditional;
      },
      setPoolPump(poolPump: number) {
        self.poolPump = poolPump;
      },
      setPoolPumpAdditional(poolPumpAdditional: string) {
        self.poolPumpAdditional = poolPumpAdditional;
      },
      setMainPoolCleanliness(mainPoolCleanliness: number) {
        self.mainPoolCleanliness = mainPoolCleanliness;
      },
      setMainPoolCleanlinessAdditional(mainPoolCleanlinessAdditional: string) {
        self.mainPoolCleanlinessAdditional = mainPoolCleanlinessAdditional;
      },
      setSpaCleanliness(spaCleanliness: number) {
        self.spaCleanliness = spaCleanliness;
      },
      setSpaCleanlinessAdditional(spaCleanlinessAdditional: string) {
        self.spaCleanlinessAdditional = spaCleanlinessAdditional;
      },
      setHairStrainer(hairStrainer: number) {
        self.hairStrainer = hairStrainer;
      },
      setHairStrainerAdditional(hairStrainerAdditional: string) {
        self.hairStrainerAdditional = hairStrainerAdditional;
      },
      setTileLine(tileLine: number) {
        self.tileLine = tileLine;
      },
      setTileLineAdditional(tileLineAdditional: string) {
        self.tileLineAdditional = tileLineAdditional;
      },
      onSubmit() {

      },

    };
  });
