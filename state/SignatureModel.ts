import { getRoot, types } from "mobx-state-tree";
import { LegacyRef, useCallback } from "react";
import { RootType } from "./RootModel";

export const SignatureModel = types
  .model("Login", {
    poolName: "",
    note: "",
    base64Signature: types.maybeNull(types.string),
    savedImagePath: "",
    isDatePickerVisible: false,
    isTimePickerVisible: false,
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
      setName(poolName: string) {
        self.poolName = poolName;
      },
      setNote(note: string) {
        self.note = note;
      },
      showTimePicker() {
        self.isTimePickerVisible = true;
      },
      hideTimePicker() {
        self.isTimePickerVisible = false;
      },
      showDatePicker() {
        self.isDatePickerVisible = true;
      },
      hideDatePicker() {
        self.isDatePickerVisible = false;
      },
      onFocusDatePicker(event): void {
        event.preventDefault();
        this.showDatePicker();
      },
      onFocusTimePicker(event): void {
        event.preventDefault();
        this.showTimePicker();
      },

      onSubmit() {
        self.isModalVisible = true;
/*        const root: RootType = getRoot(self);
        const formData = new FormData();

        formData.append("poolName", root.maintenanceReportForm.poolName);*/
      },
      hideModal(navigation) {
        self.isModalVisible = false;
        navigation.navigate("ReportChoice");
      },
    };
  });
