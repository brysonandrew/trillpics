import { BEATS_1 } from "~/constants/music/beats";
import { resolveSynthSteps } from "~/constants/music/midis";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useMidisInc = (
  key: "interval" | "repeat"
) => {
  const { set, synth } =
    useTrillPicsStore(
      ({ set, synth }) => ({
        set,
        synth,
      })
    );
  const down = () => {
    set((draft: TState) => {
      const value =
        draft.synth.melody[key] - 1;
      const next = resolveSynthSteps({
        ...draft.synth.melody,
        [key]: value,
        scale: {
          ...draft.synth.melody.scale,
        },
      });
      draft.synth.melody[key] = value;
      draft.synth.steps = next;
    });
  };
  const up = () => {
    set((draft: TState) => {
      const value =
        draft.synth.melody[key] + 1;
      const next = resolveSynthSteps({
        ...draft.synth.melody,
        scale: {
          ...draft.synth.melody.scale,
        },
        [key]: value,
      });
      draft.synth.melody[key] = value;
      draft.synth.steps = next;
    });
  };
  return { down, up };
};
