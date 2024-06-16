import { BEATS_1 } from "~/constants/music/beats";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { useTrillPicsStore } from "~/store/middleware";
import { TScalePattern } from "~/store/state/music/types";
import { TState } from "~/store/types";

export const useMidisPattern = () => {
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );
  const handler = (
    value: TScalePattern
  ) => {
    set((draft: TState) => {
      const next = resolveMidiSteps({
        ...draft.scale,
        ...draft.sequence,
        pattern: value,
      });
      draft.scale.pattern = value;
      draft.steps = next;
    });
  };
  return handler;
};
