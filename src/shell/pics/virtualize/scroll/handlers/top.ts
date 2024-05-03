import { animate } from "framer-motion";
import { useVirtualizeContext } from "~/shell/pics/virtualize/context";

export const useScrollTopHandler =
  () => {
    const {
      blurRef,
      scrollY,
      ref,
    } = useVirtualizeContext();
    const handler = () => {
      if (!ref.current) return;
      const y = scrollY.get();

      ref.current.scrollTop();
      if (blurRef.current.control.y) {
        blurRef.current.control.y.stop();
      }

      blurRef.current.control.y = animate(
        blurRef.current.value.y,
        y * 0.008,
        {
          type: "inertia",
          restDelta: 0,
          restSpeed: 1,
          velocity: y * 0.02,
          onComplete: () => {
            blurRef.current.value.y.set(0);
          },
        }
      );

      // blurYRef.current = animate(
      //   scrollY,
      //   1,
      //   {
      //     type: "tween",
      //     restDelta: 0,
      //     restSpeed: 1,
      //     velocity: y * 0.02,
      //     onComplete: () => {
      //       scrollY.set(1);
      //     },
      //   }
      // );
    };

    return {
      handler,
      scroll,
    };
  };
