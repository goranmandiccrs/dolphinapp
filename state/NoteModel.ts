import { types } from "mobx-state-tree";

export const NoteModel = types
  .model("Note", {
    leaveNote: "",
  })
  .actions((self) => {
    return {
      setLeaveNote(leaveNote: string) {
        // Alert.alert(leaveNote);
        self.leaveNote = leaveNote;
      },
    };
  });
