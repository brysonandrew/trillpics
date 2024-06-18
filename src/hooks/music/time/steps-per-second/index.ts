import { resolveStepsPerSecond } from "~/hooks/music/time/steps-per-second/resolver";
import { useTrillPicsStore } from "~/store/middleware";

export const useStepsPerSecond = () => {
  const { bpm } = useTrillPicsStore(
    ({ bpm }) => ({ bpm })
  );
  return resolveStepsPerSecond(bpm);
};
