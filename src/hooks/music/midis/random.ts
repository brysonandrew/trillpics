import { resolveSynthSteps } from "~/constants/music/midis";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useMidisRandom = () => {
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );
  const handler = () => {
    set((draft: TState) => {
      const pattern = "random";
      draft.synth.melody.scale.pattern =
        pattern;
      draft.synth.steps =
        resolveSynthSteps({
          scale: {
            ...draft.synth.melody.scale,
            pattern,
          },
        });
    });
  };

  return handler;
};
