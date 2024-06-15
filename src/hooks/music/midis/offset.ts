import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useMidisOffset = () => {
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );
  const left = () => {
    set((draft: TState) => {
      const next = [
        ...draft.synth.steps.slice(1),
        draft.synth.steps[0],
      ];
      draft.synth.steps = next;
      draft.synth.melody.offset =
        (draft.synth.melody.offset -
          1) %
        SCALE_VALUE_COUNT;
    });
  };
  const right = () => {
    set((draft: TState) => {
      const lastIndex =
        draft.synth.steps.length - 1;
      const last =
        draft.synth.steps[lastIndex];
      const next = [
        last,
        ...draft.synth.steps,
      ].slice(0, lastIndex + 1);
      draft.synth.steps = next;
      draft.synth.melody.offset =
        (draft.synth.melody.offset +
          1) %
        SCALE_VALUE_COUNT;
    });
  };
  return { left, right };
};
