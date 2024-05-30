import {
  animate,
  MotionValue,
} from "framer-motion";
import { useContextReady } from "~/shell/ready/context";
import { useTrillPicsStore } from "~/store/middleware";

export const useBlurAnimate1 = (
  axis: "x" | "y" = "x"
) => {
  const { main } = useContextReady();
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );
  const handler = (
    adjacentMotion: MotionValue<number>
  ) => {
    if (main.blur.control[axis]) {
      main.blur.control[axis]?.stop();
    }
    set({ isScroll: false });
    const prev = adjacentMotion.get();
    main.blur.control[axis] = animate(
      main.blur.value[axis],
      prev * 0.008,
      {
        type: "tween",
        restDelta: 0,
        restSpeed: 1,
        velocity: prev * 0.02,
        onComplete: () => {
          adjacentMotion.set(prev);
        },
      }
    );
  };

  return handler;
};
