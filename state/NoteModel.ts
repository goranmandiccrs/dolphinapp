import { types } from "mobx-state-tree";

export const NoteModel = types
  .model("Note", {
    leaveNote: "",
    beforeImageBase64: "",
    afterImageBase64: "",
  })
  .actions((self) => {
    return {
      setLeaveNote(leaveNote: string) {
        // Alert.alert(leaveNote);
        self.leaveNote = leaveNote;
      },
      setBeforeImage(uploadImage) {
        self.beforeImageBase64 = uploadImage;
      },
      setAfterImage(uploadImage) {
        self.afterImageBase64 = uploadImage;
      }
    };
  });
