import { useEffect } from "react";
import {
  animate,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePicVideo } from "~/hooks/pic/video";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { FULLSCREEN_Z } from "~/constants/dom";
import {
  VIDEO_SCHEDULER_ROUTE,
  VIDEO_ROUTE,
} from "~/constants/params";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { isDefined } from "~/utils/validation/is/defined";
import { useTrillPicsStore } from "~/store/middleware";
import { useBodyStyle } from "~/context/use-body-style";
import { PIC_SIZE } from "~/constants/remotion";
import { _CommonReorder } from "~/pages/video/_common/reorder";

export const VideoSchedulerReorder =
  () => {
    const { size, count } =
      usePicVideo();
    useBodyStyle(
      `overflow-x: hidden; overflow-y: scroll; overscroll-behavior: none; -ms-overflow-style: none;`
    );

    const padding = 2 * size;
    const scrollRange =
      count * size + padding;
    const { screen } =
      useTrillPicsStore(
        ({ screen }) => ({ screen })
      );
    const { scrollYProgress } =
      useScroll();
    const {
      togglePathValue,
      isActive,
    } = useNavigationControls(
      VIDEO_ROUTE
    );
    const handleClick = () => {
      togglePathValue(
        isActive
          ? VIDEO_SCHEDULER_ROUTE
          : VIDEO_ROUTE
      );
    };
    const physics = {
      damping: 15,
      mass: 0.27,
      stiffness: 55,
    };
    useEffect(() => {
      scrollYProgress.set(1);
      animate(scrollYProgress, 0, {
        type: "spring",
        ...physics,
      });
    }, []);

    const isScreenReady =
      isDefined(screen) &&
      "isDimensions" in screen &&
      screen.isDimensions;
    const screenWidth =
      (isScreenReady && screen.width) ||
      0;
    const screenHeight =
      (isScreenReady && screen.width) ||
      0;
    const transform = useTransform(
      scrollYProgress,
      [0, 1],
      [0, -scrollRange + screenWidth]
    );

    const spring = useSpring(
      transform,
      physics
    );
    return (
      <>
        <div className="fixed left-0 top-0 bg-black-5">
          <PicBackdrop
            onTap={handleClick}
          />
          <motion.div
            className="relative center"
            style={{
              height: screenHeight,
              zIndex: FULLSCREEN_Z,
              x: spring,
            }}
          >
            <motion.div
              className="relative row"
              style={{
                height: size,
                top: "0%",
                left: size, //padding
                width: "100vw",
                y:
                  PIC_SIZE / 2 -
                  screenHeight / 2,
              }}
            >
              {screen.isDimensions && (
                <_CommonReorder />
              )}
            </motion.div>
          </motion.div>
        </div>
        <div
          style={{
            width: "100%",
            height: scrollRange,
          }}
        />
      </>
    );
  };
