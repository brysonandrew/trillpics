import { MotionValue, useMotionValue } from "framer-motion";
import { TProgressKey } from "~/pages/video/music/_context/init/types";

export const useMusicInitProgress = ():Record<TProgressKey,MotionValue> => {
  const midis = useMotionValue(0);
  const beats = useMotionValue(0);
  const track = useMotionValue(0);

  return { midis, beats, track };
};
