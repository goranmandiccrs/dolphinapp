import { types } from "mobx-state-tree";

export const ChemicalsModel = types
  .model("Login", {
    chlorineMain: "",
    chlorineSpa: "",
    clorineAdditional: "",
    phMain: "",
    phSpa: "",
    phAdditional: "",
    alkalintyMain: "",
    alkalintySpa: "",
    alkalintyAdditional: "",
    calciumMain: "",
    calciumSpa: "",
    calciumAdditional: "",
    ctaMain: "",
    ctaSpa: "",
    ctaAdditional: "",
    onSubmit: "",
  })
  .actions((self) => {
    return {
      setChlorineMain(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setChlorineSpa(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setChlorineAdditional(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      
      setPhMain(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setPhSpa(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setPhAdditional(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },

      setAlkalintyMain(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setAlkalintySpa(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setAlkalintyAdditional(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },

      setCalciumMain(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setCalciumSpa(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setCalciumAdditional(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },

      setCtaMain(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setCtaSpa(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      setCtaAdditional(chlorineMain: string) {
        self.chlorineMain = chlorineMain;
      },
      
      onSubmit() {;
      },
    };
  });
