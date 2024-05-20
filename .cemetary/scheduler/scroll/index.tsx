import { useRef } from "react";
import {
  useTransform,
  useSpring,
} from "framer-motion";
import { useContextGrid } from "~/context";
import { useTrillPicsStore } from "~/store/middleware";
import { isDefined } from "~/utils/validation/is/defined";
import { usePicVideo } from "~/hooks/pic/video";

export const VideoSchedulerScroll =
  () => {
    const { count, size } =
      usePicVideo();
    const scrollRange = count * size;
    const { screen } =
      useTrillPicsStore(
        ({ screen }) => ({ screen })
      );
    const scrollRef = useRef<{
      scrollWidth: number;
    }>({ scrollWidth: 0 });
    const { ref, main, scrollY } =
      useContextGrid();

    // useLayoutEffect(() => {
    //   scrollRef &&
    //     setScrollRange(
    //       scrollRef.current.scrollWidth
    //     );
    // }, [scrollRef]);

    const screenWidth =
      (isDefined(screen) &&
        "isDimensions" in screen &&
        screen.isDimensions &&
        screen.width) ||
      0;
    console.log(screenWidth);
    const transform = useTransform(
      scrollY,
      [0, 1],
      [0, -scrollRange + screenWidth]
    );
    const physics = {
      damping: 15,
      mass: 0.27,
      stiffness: 55,
    };
    const spring = useSpring(
      transform,
      physics
    );

    return (
      <div
        style={{ height: scrollRange }}
        className="ghost"
      />
    );
  };
