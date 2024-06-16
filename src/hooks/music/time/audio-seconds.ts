import { STEPS_COUNT } from "~/constants/music/timing";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { useTrillPicsStore } from "~/store/middleware";

export const useAudioSeconds = (
  stepsCount = STEPS_COUNT
) => {
  const { bpm } = useTrillPicsStore(
    ({ bpm }) => ({ bpm })
  );
  return (
    resolveStepsPerSecond(bpm) *
    stepsCount
  );
};
