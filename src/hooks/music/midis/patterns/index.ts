import { BEATS_1 } from "~/constants/music/beats";
import { resolveRandomRange } from "~/constants/music/midis";
import { useTrillPicsStore } from "~/store/middleware";

export const useMusicMidisPatterns =
  () => {
    const { scaleKey, set } =
      useTrillPicsStore(
        ({ scaleKey, set }) => ({
          scaleKey,
          set,
        })
      );
    const handler = () => {
      const next =
        resolveRandomRange(BEATS_1);
      set({ synthSteps: next });
    };
    return handler;
  };
