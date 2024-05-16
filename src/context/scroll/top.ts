import { animate } from "framer-motion";
import { useContextGrid } from "~/context";
import { useTrillPicsStore } from "~/store/middleware";

export const useScrollTopHandler =
  () => {
    const {
      main,
      scrollY,
      ref,
    } = useContextGrid();
    const {
      set
    } = useTrillPicsStore(
      ({
        set
      }) => ({
        set
      })
    );
    const handler = () => {
      if (!ref.current) return;
      const y = scrollY.get();
     ref.current.scrollTop();
      if (main.blur.control.y) {
        main.blur.control.y.stop();
      }

      set({isScroll: false})

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

      main.blur.control.y = animate(
        main.blur.value.y,
        y * 0.008,
        {
          type: "tween",
          restDelta: 0,
          restSpeed: 1,
          velocity: y * 0.02,
          onComplete: () => {
            main.blur.value.y.set(0);
            scrollY.set(0)
          },
        }
      );
    };

    return {
      handler,
      scroll,
    };
  };
