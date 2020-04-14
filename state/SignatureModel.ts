import { types } from "mobx-state-tree";

export const SignatureModel = types
  .model("Login", {
    poolName: "",
    note: "",
    isDatePickerVisible: false,
    isTimePickerVisible: false,
    isModalVisible: false,
  })
  .views((self) => {
    return {

    };
  })
  .actions((self) => {
    return {
      setName(poolName: string) {
        // Alert.alert(poolName);
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
      },
      hideModal(navigation) {
        self.isModalVisible = false;
        navigation.navigate("ReportChoice");
      }
    };
  });
