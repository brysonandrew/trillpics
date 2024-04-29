import { animate } from "framer-motion";
import { useVirtualizeScroll } from "~/shell/pics/virtualize/use-scroll";

export const useVirtualizeScrollTopHandler =
  () => {
    const {
      isScroll,
      virtualizeList,
      blurY,
      blurYRef,
      scroll,
    } = useVirtualizeScroll();
    const handler = () => {
      if (!virtualizeList) return;
      const scrollOffset =
        virtualizeList.state
          .scrollOffset;

      virtualizeList.scrollToItem(0);
      if (blurYRef.current) {
        blurYRef.current.stop();
      }

      blurYRef.current = animate(
        blurY,
        scrollOffset * 0.008,
        {
          type: "inertia",
          restDelta: 0,
          restSpeed: 1,
          velocity: scrollOffset * 0.02,
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
          velocity: scrollOffset * 0.02,
          onComplete: () => {
            scroll.y.set(1);
          },
        }
      );
    };

    return {
      handler,
      isScroll,
      scroll,
    };
  };
