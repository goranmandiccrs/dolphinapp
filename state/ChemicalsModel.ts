import { types } from "mobx-state-tree";

export const ChemicalsModel = types
  .model("Login", {
    chlorineMain: types.maybeNull(types.number),
    chlorineSpa: types.maybeNull(types.number),
    clorineAdditional: "",
    phMain: types.maybeNull(types.number),
      phSpa: types.maybeNull(types.number),
    phAdditional: "",
    alkalintyMain: types.maybeNull(types.number),
    alkalintySpa: types.maybeNull(types.number),
    alkalintyAdditional: "",
    calciumMain: types.maybeNull(types.number),
    calciumSpa: types.maybeNull(types.number),
    calciumAdditional: "",
    cyaMain: types.maybeNull(types.number),
    cyaSpa: types.maybeNull(types.number),
    cyaAdditional: "",
    onSubmit: types.maybeNull(types.number),
  })
  .actions((self) => {
    return {
      increaseNumberValue(value, maxValue): void {
        self[value] = Math.min(self[value] + 1, maxValue);
      },
      decreaseNumberValue(value, minValue): void {
        self[value] = Math.max(self[value] - 1, minValue);
      },

      increaseDecimalNumberValue(value, maxValue): void {
        self[value] = self[value] || 7;
        self[value] = parseFloat(Math.min(self[value] += 0.1, maxValue).toFixed(2));
      },
      decreaseDecimalNumberValue(value, minValue): void {
        self[value] = self[value] || 7;
        self[value] = parseFloat(Math.max(self[value] -= 0.1, minValue).toFixed(2));
      },

      increaseNumberValueByTen(value, maxValue): void {
        self[value] = Math.min(self[value] + 10, maxValue);
      },
      decreaseNumberValueByTen(value, minValue): void {
        self[value] = Math.max(self[value] - 10, minValue);
      },
      increaseNumberValueByFive(value, maxValue): void {
        self[value] = Math.min(self[value] + 5, maxValue);
      },
      decreaseNumberValueByFive(value, minValue): void {
        self[value] = Math.max(self[value] - 5, minValue);
      },

      setChlorineMain(chlorineMain: number) {
        self.chlorineMain = chlorineMain;
      },
      setChlorineSpa(chlorineSpa: number) {
        self.chlorineSpa = chlorineSpa;
      },
      setChlorineAdditional(clorineAdditional: string) {
        self.clorineAdditional = clorineAdditional;
      },

      setPhMain(phMain: number) {
        self.phMain = phMain;
      },
      setPhSpa(phSpa: number) {
        self.phSpa = phSpa;
      },
      setPhAdditional(phAdditional: string) {
        self.phAdditional = phAdditional;
      },

      setAlkalintyMain(alkalintyMain: number) {
        self.alkalintyMain = alkalintyMain;
      },
      setAlkalintySpa(alkalintySpa: number) {
        self.alkalintySpa = alkalintySpa;
      },
      setAlkalintyAdditional(alkalintyAdditional: string) {
        self.alkalintyAdditional = alkalintyAdditional;
      },

      setCalciumMain(calciumMain: number) {
        self.calciumMain = calciumMain;
      },
      setCalciumSpa(calciumSpa: number) {
        self.calciumSpa = calciumSpa;
      },
      setCalciumAdditional(calciumAdditional: string) {
        self.calciumAdditional = calciumAdditional;
      },

      setCyaMain(cyaMain: number) {
        self.cyaMain = cyaMain;
      },
      setCyaSpa(cyaSpa: number) {
        self.cyaSpa = cyaSpa;
      },
      setCyaAdditional(cyaAdditional: string) {
        self.cyaAdditional = cyaAdditional;
      },

      onSubmit() {;
      },
    };
  });
