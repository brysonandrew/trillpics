import { resolveStepsPerSecond } from "~/hooks/music/time/steps-per-second/resolver";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const useStepsPerSecond = () => {
  const {
    schedule: {
      record: { bpm },
    },
  } = useMusicRefs();
  return resolveStepsPerSecond(bpm);
};
