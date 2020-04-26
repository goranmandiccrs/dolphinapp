import { getRoot, types } from "mobx-state-tree";
import { LegacyRef, useCallback } from "react";
import { RootType } from "./RootModel";

export const SignatureModel = types
  .model("Login", {
    note: "",
    base64Signature: types.maybeNull(types.string),
    savedImagePath: "",
    isModalVisible: false,
  })
  .views((self) => {
    return {};
  })
  .volatile(() => {
    return {
      signatureRef: {},
    };
  })
  .actions((self) => {
    return {
      useHookWithSignatureCallback(): LegacyRef<SVGSVGElement>[] {
        const setRef = useCallback(this.signatureCallback, []);
        return [setRef];
      },
      signatureCallback(ref): void {
        self.signatureRef = ref;
      },
      onSaveImage(image) {
        self.base64Signature = image.encoded;
        self.savedImagePath = image.pathName;
        console.log(self.savedImagePath);
      },
      setNote(note: string) {
        self.note = note;
      },

      onSubmit() {
        self.isModalVisible = true;
        const root: RootType = getRoot(self);
        const formData = new FormData();

        // Maintenance Report
        formData.append("poolName", root.maintenanceReportForm.poolName);
        formData.append("technicianName", root.maintenanceReportForm.technicianName);
        formData.append("numberOfBathers", root.maintenanceReportForm.numberOfBathers);
        formData.append("reportTime", root.maintenanceReportForm.reportDate);
        formData.append("reportDate", root.maintenanceReportForm.reportDate);
        formData.append("weatherRadioGroup", root.maintenanceReportForm.weatherRadioGroup);

        // Cleanliness
        formData.append("poolClarity", root.cleanlinessForm.poolClarity);
        formData.append("poolClarityAdditional", root.cleanlinessForm.poolClarityAdditional);
        formData.append("spaClarity", root.cleanlinessForm.spaClarity);
        formData.append("spaClarityAdditional", root.cleanlinessForm.spaClarityAdditional);
        formData.append("poolBottomVacuumed", root.cleanlinessForm.poolBottomVacuumed);
        formData.append("poolBottomVacuumedAdditional", root.cleanlinessForm.poolBottomVacuumedAdditional);
        formData.append("skimmer", root.cleanlinessForm.skimmer);
        formData.append("skimmerAdditional", root.cleanlinessForm.skimmerAdditional);
        formData.append("blowPoolDeck", root.cleanlinessForm.blowPoolDeck);
        formData.append("blowPoolDeckAdditional", root.cleanlinessForm.blowPoolDeckAdditional);
        formData.append("poolPump", root.cleanlinessForm.poolPump);
        formData.append("poolPumpAdditional", root.cleanlinessForm.poolPumpAdditional);
        formData.append("mainPoolCleanliness", root.cleanlinessForm.mainPoolCleanliness);
        formData.append("mainPoolCleanlinessAdditional", root.cleanlinessForm.mainPoolCleanlinessAdditional);
        formData.append("spaCleanliness", root.cleanlinessForm.spaCleanliness);
        formData.append("spaCleanlinessAdditional", root.cleanlinessForm.spaCleanlinessAdditional);
        formData.append("hairStrainer", root.cleanlinessForm.hairStrainer);
        formData.append("hairStrainerAdditional", root.cleanlinessForm.hairStrainerAdditional);
        formData.append("tileLine", root.cleanlinessForm.tileLine);
        formData.append("tileLineAdditional", root.cleanlinessForm.tileLineAdditional);

        // Chemicals
        formData.append("chlorineMain", root.chemicalsForm.chlorineMain);
        formData.append("chlorineSpa", root.chemicalsForm.chlorineSpa);
        formData.append("clorineAdditional", root.chemicalsForm.clorineAdditional);
        formData.append("phMain", root.chemicalsForm.phMain);
        formData.append("phSpa", root.chemicalsForm.phSpa);
        formData.append("phAdditional", root.chemicalsForm.phAdditional);
        formData.append("alkalintyMain", root.chemicalsForm.alkalintyMain);
        formData.append("alkalintySpa", root.chemicalsForm.alkalintySpa);
        formData.append("alkalintyAdditional", root.chemicalsForm.alkalintyAdditional);
        formData.append("calciumMain", root.chemicalsForm.calciumMain);
        formData.append("calciumSpa", root.chemicalsForm.calciumSpa);
        formData.append("calciumAdditional", root.chemicalsForm.calciumAdditional);
        formData.append("cyaMain", root.chemicalsForm.cyaMain);
        formData.append("cyaSpa", root.chemicalsForm.cyaSpa);
        formData.append("cyaAdditional", root.chemicalsForm.cyaAdditional);
        
        // Equipment
        formData.append("pumpConditionRadioGroup", root.equipmentForm.pumpConditionRadioGroup);
        formData.append("pumpConditionAdditional", root.equipmentForm.pumpConditionAdditional);
        formData.append("filterConditionRadioGroup", root.equipmentForm.filterConditionRadioGroup);
        formData.append("filterConditionAdditional", root.equipmentForm.filterConditionAdditional);
        formData.append("valvesConditionRadioGroup", root.equipmentForm.valvesConditionRadioGroup);
        formData.append("valvesConditionAdditional", root.equipmentForm.valvesConditionAdditional);
        formData.append("filterPressureRadioGroup", root.equipmentForm.filterPressureRadioGroup);
        formData.append("filterPressureAdditional", root.equipmentForm.filterPressureAdditional);
        formData.append("othersRadioGroup", root.equipmentForm.othersRadioGroup);
        formData.append("othersAdditional", root.equipmentForm.othersAdditional);

        // Overall
        formData.append("chlorinatorOperationalRadioGroup", root.overallForm.chlorinatorOperationalRadioGroup);
        formData.append("chlorinatorOperationalAdditional", root.overallForm.chlorinatorOperationalAdditional);
        formData.append("gaguesRadioGroup", root.overallForm.gaguesRadioGroup);
        formData.append("gaguesAdditional", root.overallForm.gaguesAdditional);
        formData.append("hamzatRadioGroup", root.overallForm.hamzatRadioGroup);
        formData.append("hamzatAdditional", root.overallForm.hamzatAdditional);
        formData.append("msdsRadioGroup", root.overallForm.msdsRadioGroup);
        formData.append("msdsAdditional", root.overallForm.msdsAdditional);
        formData.append("waterLeakRadioGroup", root.overallForm.waterLeakRadioGroup);
        formData.append("waterLeakAdditional", root.overallForm.waterLeakAdditional);
        formData.append("filterBackwashedRadioGroup", root.overallForm.filterBackwashedRadioGroup);
        formData.append("filterBackwashedAdditional", root.overallForm.filterBackwashedAdditional);
        formData.append("cartrigesWashedRadioGroup", root.overallForm.cartrigesWashedRadioGroup);
        formData.append("cartrigesWashedAdditional", root.overallForm.cartrigesWashedAdditional);

        // Note
        formData.append("leaveNote", root.noteForm.leaveNote);
        
        // Signature
        formData.append("savedImagePath", root.signatureForm.savedImagePath);
      },
      hideModal(navigation) {
        self.isModalVisible = false;
        navigation.navigate("ReportChoice");
      },
    };
  });
