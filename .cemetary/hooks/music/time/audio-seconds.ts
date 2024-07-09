import { STEPS_COUNT } from "~/constants/music/timing";
import { resolveStepsPerSecond } from "~/hooks/music/time/steps-per-second/resolver";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const useAudioSeconds = (
  stepsCount = STEPS_COUNT
) => {
  const {
    schedule,
  } = useMusicRefs();
  return (
    resolveStepsPerSecond(schedule.record.bpm) *
    stepsCount
  );
};
