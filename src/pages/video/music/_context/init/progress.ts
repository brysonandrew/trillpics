import { useMotionValue } from "framer-motion";

export const useMusicInitProgress = () => {
  const midis = useMotionValue(0);
  const beats = useMotionValue(0);
  const recorder = useMotionValue(0);

  return { midis, beats, recorder };
};
