import { STEPS_COUNT } from "~/constants/music/timing";
import { resolveStepsPerSecond } from "~/hooks/music/time/steps-per-second/resolver";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

export const useAudioSeconds = (
  stepsCount = STEPS_COUNT
) => {
  const {
    audio: {
      save: { recorder },
    },
    schedule,
  } = useMusicRefs();
  return (
    resolveStepsPerSecond(schedule.record.bpm) *
    stepsCount
  );
};
