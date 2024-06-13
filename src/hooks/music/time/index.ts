import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

export const useStepsPerSecond = () => {
  const { bpm } = useTrillPicsStore(
    ({ bpm }) => ({ bpm })
  );
  return resolveStepsPerSecond(bpm);
};
