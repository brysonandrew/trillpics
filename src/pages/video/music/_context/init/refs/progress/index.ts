import { useMemo } from "react";
import { MotionValue, useMotionValue } from "framer-motion";
import { TProgressKey } from "~/pages/video/music/_context/init/refs/progress/types";

export const useRefsProgress =
  (): Record<
    TProgressKey,
    MotionValue
  > => {
    // const progress =
    //   useRefsProgress();

    const midis = useMotionValue(0);
    const beats = useMotionValue(0);
    const track = useMotionValue(0);

    const refs = useMemo(() => {
      return {
        midis,
        beats,
        track,
      };
    }, []);
    return refs;
  };
