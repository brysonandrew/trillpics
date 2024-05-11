import { useRef } from "react";
import {
  motion,
  Reorder,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { PicDisplay } from "~/pics/grid/pic/display";
import { usePicVideo } from "~/hooks/pic/video";
import { resolvePicSrc } from "~/utils/src";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { FULLSCREEN_Z } from "~/constants/dom";
import {
  VIDEO_SCHEDULER_ROUTE,
  VIDEO_ROUTE,
} from "~/constants/params";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { isDefined } from "~/utils/validation/is/defined";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoSchedulerReorder =
  () => {
    const {
      size,
      names,
      count,
      reorder,
    } = usePicVideo();
    const scrollRange = count * size;
    const { screen } =
      useTrillPicsStore(
        ({ screen }) => ({ screen })
      );
    const { scrollYProgress } =
      useScroll();
    const scrollRef = useRef<{
      scrollWidth: number;
    }>({ scrollWidth: 0 });
    // const { ref, main, scrollY } =
    //   useContextGrid();
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

    const screenWidth =
      (isDefined(screen) &&
        "isDimensions" in screen &&
        screen.isDimensions &&
        screen.width) ||
      0;
    console.log(screenWidth);
    const transform = useTransform(
      scrollYProgress,
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

    console.log(names);
    return (
      <div className="fill-screen row">
        <PicBackdrop
          onTap={handleClick}
        />
        <div>
          <motion.div
            className="relative"
            style={{
              height: size,
              zIndex: FULLSCREEN_Z,
              x: spring,
            }}
          >
            <Reorder.Group
              axis="x"
              values={names}
              className="row gap-4"
              onReorder={reorder}
            >
              {names.map(
                (name, index) => (
                  <Reorder.Item
                    key={name}
                    value={name}
                  >
                    <PicDisplay
                      name={name}
                      src={resolvePicSrc(
                        name
                      )}
                      style={{
                        ...resolveSquare(
                          size
                        ),
                      }}
                    />
                  </Reorder.Item>
                )
              )}
            </Reorder.Group>
          </motion.div>
        </div>
        <div
          // ref={ghostRef}
          style={{
            height: scrollRange,
          }}
          className="ghost bg-red"
        />
      </div>
    );
  };
