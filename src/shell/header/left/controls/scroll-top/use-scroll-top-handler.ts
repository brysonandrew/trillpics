import { animate } from "framer-motion";
import { useScroll } from "~/context/scroll";

export const useScrollTopHandler =
  () => {
    const { isScroll, listRef } =
      useScroll();
    const { blurY, blurYRef } =
      useScroll();

    const handler = () => {
      const scrollOffset =
        listRef.current.state
          .scrollOffset;
      listRef.current.scrollToItem(0);
      if (blurYRef.current) {
        console.log("STOP");
        blurYRef.current.stop();
      }
      blurYRef.current = animate(
        blurY,
        scrollOffset * 0.001,
        {
          type: "inertia",
          restDelta: 0,
          restSpeed: 1,
          velocity: scrollOffset * 0.01,
        }
      );
    };

    return { handler, isScroll };
  };
