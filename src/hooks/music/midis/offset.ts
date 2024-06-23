import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useNodesOffset = () => {
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );
  const left = () => {
    set((draft: TState) => {
      const next = [
        ...draft.steps.slice(1),
        draft.steps[0],
      ];
      draft.steps = next;
      draft.sequence.offset =
        (draft.sequence.offset -
          1) %
        SCALE_VALUE_COUNT;
    });
  };
  const right = () => {
    set((draft: TState) => {
      const lastIndex =
        draft.steps.length - 1;
      const last =
        draft.steps[lastIndex];
      const next = [
        last,
        ...draft.steps,
      ].slice(0, lastIndex + 1);
      draft.steps = next;
      draft.sequence.offset =
        (draft.sequence.offset +
          1) %
        SCALE_VALUE_COUNT;
    });
  };
  return { left, right };
};
