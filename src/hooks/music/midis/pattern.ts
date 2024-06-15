import { BEATS_1 } from "~/constants/music/beats";
import { resolveSynthSteps } from "~/constants/music/midis";
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
      const next = resolveSynthSteps({
        beats: BEATS_1,
        scale: {
          ...draft.synth.melody.scale,
          pattern: value,
        },
      });
      draft.synth.melody.scale.pattern =
        value;
      draft.synth.steps = next;
    });
  };
  return handler;
};
