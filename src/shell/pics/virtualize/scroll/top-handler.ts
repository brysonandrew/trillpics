import { animate } from "framer-motion";
import { useVirtualizeContext } from "~/shell/pics/virtualize/context";

export const useScrollTopHandler =
  () => {
    const {
      blurY,
      blurYRef,
      scroll,
      virtualizeHandle,
    } = useVirtualizeContext();

    const handler = () => {
      const scrollY = scroll.y.get();
      // const scrollOffset =
      // virtualizeHandle.state
      //     .scrollOffset;

      virtualizeHandle.scrollTop();
      if (blurYRef.current) {
        blurYRef.current.stop();
      }

      blurYRef.current = animate(
        blurY,
        scrollY * 0.008,
        {
          type: "inertia",
          restDelta: 0,
          restSpeed: 1,
          velocity: scrollY * 0.02,
          onComplete: () => {
            blurY.set(0);
            scroll.y.set(0);
          },
        }
      );

      blurYRef.current = animate(
        scroll.y,
        1,
        {
          type: "tween",
          restDelta: 0,
          restSpeed: 1,
          velocity: scrollY * 0.02,
          onComplete: () => {
            scroll.y.set(1);
          },
        }
      );
    };

    return {
      handler,
      scroll,
    };
  };
