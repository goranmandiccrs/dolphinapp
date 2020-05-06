import { getRoot, types } from "mobx-state-tree";
import { LegacyRef, useCallback } from "react";
import { RootType } from "./RootModel";
import { fetch } from "whatwg-fetch";
import { URLs } from "./URLs";


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
      },
      setNote(note: string) {
        self.note = note;
      },

      onSubmit() {
        self.isModalVisible = true;
        const root: RootType = getRoot(self);
        const formData = new FormData();

        const data = {
          clientID: root.maintenanceReportForm.selectedClient?._id,
          general: {
            numberOfBathers: root.maintenanceReportForm.numberOfBathers,
            dateTime: root.maintenanceReportForm.reportTime,
            weather: root.maintenanceReportForm.weatherRadioGroup.selectedOption?.text,
          },
          cleanliness: {
            mainPoolClarity: root.cleanlinessForm.poolClarity,
            mainPoolClarityNotes: root.cleanlinessForm.poolClarityAdditional,
            spaClarity: root.cleanlinessForm.spaClarity,
            spaClariyNotes: root.cleanlinessForm.spaClarityAdditional,
            poolBottomVacuumed: root.cleanlinessForm.poolBottomVacuumed,
            poolBottomVacuumedNotes: root.cleanlinessForm.poolBottomVacuumedAdditional,
            skimmerBasketsClean: root.cleanlinessForm.skimmer,
            skimmerBasketsCleanNotes: root.cleanlinessForm.skimmerAdditional,
            blowPoolDeckArea: root.cleanlinessForm.blowPoolDeck,
            blowPoolDeckAreaNotes: root.cleanlinessForm.blowPoolDeckAdditional,
            poolPumpAreaOrganized: root.cleanlinessForm.poolPump,
            poolPumpAreaOrganizedNotes: root.cleanlinessForm.poolPumpAdditional,
            mainPoolCleanliness: root.cleanlinessForm.mainPoolCleanliness,
            mainPoolCleanlinessNotes: root.cleanlinessForm.mainPoolCleanlinessAdditional,
            spaCleanliness: root.cleanlinessForm.spaCleanliness,
            spaCleanlinessNotes: root.cleanlinessForm.spaCleanlinessAdditional,
            hairStrainerBasketClean: root.cleanlinessForm.hairStrainer,
            hairStrainerBasketCleanNotes: root.cleanlinessForm.hairStrainerAdditional,
            tileLineClean: root.cleanlinessForm.tileLine,
            tileLineCleanNotes: root.cleanlinessForm.tileLineAdditional,
          },
          chemicals: {
            chlorineMain: root.chemicalsForm.chlorineMain,
            chlorineSpa: root.chemicalsForm.chlorineSpa,
            chlorineNotes: root.chemicalsForm.clorineAdditional,
            phMain: root.chemicalsForm.phMain,
            phSpa: root.chemicalsForm.phSpa,
            phNotes: root.chemicalsForm.phAdditional,
            alkalityMain: root.chemicalsForm.alkalintyMain,
            alkalitySpa: root.chemicalsForm.alkalintySpa,
            alkalityNotes: root.chemicalsForm.alkalintyAdditional,
            calciumMain: root.chemicalsForm.calciumMain,
            calciumSpa: root.chemicalsForm.calciumSpa,
            calciumNotes: root.chemicalsForm.calciumAdditional,
            cyaMain: root.chemicalsForm.cyaMain,
            cyaSpa: root.chemicalsForm.cyaSpa,
            cyaNotes: root.chemicalsForm.cyaAdditional,
            tabletChlorine: root.chemicalsForm.tabletChlorine,
            liquidChlorine: root.chemicalsForm.liquidChlorine,
            salt: root.chemicalsForm.salt,
            chlorine: root.chemicalsForm.chlorine,
            murlaticAcid: root.chemicalsForm.murlaticAcid,
            cya: root.chemicalsForm.cya,
            dechlorine: root.chemicalsForm.dechlorine,
            sodiumBicarbonate: root.chemicalsForm.sodiumBicarbonate,
          },
          equipment: {
            pumpInGoodCondition: root.equipmentForm.pumpConditionRadioGroup.selectedOption?.text,
            pumpInGoodConditionNotes: root.equipmentForm.filterConditionAdditional,
            poolFilterInGoodCondition: root.equipmentForm.filterConditionRadioGroup.selectedOption?.text,
            poolFilterInGoodConditionNotes: root.equipmentForm.filterConditionAdditional,
            valveInGoodCondition: root.equipmentForm.valvesConditionRadioGroup.selectedOption?.text,
            valveInGoodConditionNotes: root.equipmentForm.valvesConditionAdditional,
            other: root.equipmentForm.othersRadioGroup.selectedOption?.text,
            otherNotes: root.equipmentForm.othersAdditional,
          },
          overall: {
            chlorinatorOperational: root.overallForm.chlorinatorOperationalRadioGroup.selectedOption?.text,
            chlorinatorOperationalNotes: root.overallForm.cartrigesWashedAdditional,
            allGaugeWorking: root.overallForm.gaguesRadioGroup.selectedOption?.text,
            allGaugeWorkingNotes: root.overallForm.gaguesAdditional,
            hazmatKit: root.overallForm.hamzatRadioGroup.selectedOption?.text,
            hazmatKitNotes: root.overallForm.hamzatAdditional,
            msdsSheetPostage: root.overallForm.msdsRadioGroup.selectedOption?.text,
            msdsSheetPostageNotes: root.overallForm.msdsAdditional,
            waterLeakDetection: root.overallForm.waterLeakRadioGroup.selectedOption?.text,
            waterLeakDetectionNotes: root.overallForm.waterLeakAdditional,
            filterBackwashed: root.overallForm.filterBackwashedRadioGroup.selectedOption?.text,
            filterBackwashedNotes: root.overallForm.filterBackwashedAdditional,
            catridgesWashed: root.overallForm.cartrigesWashedRadioGroup.selectedOption?.text,
            catridgesWashedNotes: root.overallForm.cartrigesWashedAdditional,
          },
          notes: {
            note: root.noteForm.leaveNote
          }
        };
        // console.log(data);
        formData.append("data", JSON.stringify(data));
        formData.append("signature", self.base64Signature || "");
        formData.append("pictureBefore", root.noteForm.beforeImageBase64);
        formData.append("pictureAfter", root.noteForm.afterImageBase64);


        fetch(URLs.createMaintenanceReport, {
          method: "POST",
          headers: {
            authorization: `Bearer ${root.loginForm.token}`,
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }).catch(e => {
          console.log("ERROR:", e);
        });
      },
      showModal() {
        self.isModalVisible = true;
      },
      hideModal(navigation) {
        self.isModalVisible = false;
        navigation.navigate("ReportChoice");
      },
    };
  });
