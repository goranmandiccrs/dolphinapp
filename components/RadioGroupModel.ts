import { types } from "mobx-state-tree";

export const OptionModel = types.model("RadioOption", {
  id: types.identifier,
  text: types.string,
});

export const RadioGroupModel = types
  .model("RadioGroup", {
    options: types.array(OptionModel),
    selectedOption: types.maybeNull(types.reference(OptionModel)),
  })
  .views((self) => {
    return {
      get selectedOptionIndex(): number {
        return self.options.findIndex(
          (option) => option.text === self.selectedOption?.text
        );
      },
    };
  }).actions(self => {
    return {
      setSelectedOption(selectedOption) {
        self.selectedOption = self.options.find(
          (option) => option.text === selectedOption
        ) || null;
      }
    }
  });
