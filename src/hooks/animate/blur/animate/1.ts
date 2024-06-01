import {
  animate,
  MotionValue,
} from "framer-motion";
import { TBlurVariant } from "~/shell/init/context/blur";
import { useContextReady } from "~/shell/ready/context";
import { useTrillPicsStore } from "~/store/middleware";

export const useBlurAnimate1 = (
  axis: TBlurVariant = "scrollY"
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
      main.blur.control[axis]?.cancel();
    }
    set({ isScroll: false });
    const value = adjacentMotion.get();
    main.blur.control[axis] = animate(
      main.blur.value[axis],
      value,
      {
        type: "tween",
        restDelta: 0,
        restSpeed: 1,
        velocity:
          adjacentMotion.getVelocity(),
        onComplete: () => {
          // adjacentMotion.set(prev);
          main.blur.value[axis].set(0);
        },
      }
    );
  };

  return handler;
};
