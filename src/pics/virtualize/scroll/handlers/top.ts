import { animate } from "framer-motion";
import { useVirtualizeContext } from "~/pics/virtualize/context";

export const useScrollTopHandler =
  () => {
    const {
      main,
      scrollY,
      ref,
    } = useVirtualizeContext();
    const handler = () => {
      if (!ref.current) return;
      const y = scrollY.get();
console.log(ref.current, y)
     ref.current.scrollTop();
      // if (main.blur.control.y) {
      //   main.blur.control.y.stop();
      // }

      // main.blur.control.y = animate(
      //   main.blur.value.y,
      //   y * 0.008,
      //   {
      //     type: "inertia",
      //     restDelta: 0,
      //     restSpeed: 1,
      //     velocity: y * 0.02,
      //     onComplete: () => {
      //       main.blur.value.y.set(0);
      //     },
      //   }
      // );

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
