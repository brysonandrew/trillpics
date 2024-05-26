import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { useContextGrid } from "~/context";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { CursorCorners } from "~/pics/grid/pic/cursor/corners";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";
import {
  DELAY_TRANSITION_PROPS,
  PRESENCE_OPACITY_04,
  PRESENCE_OPACITY_06,
} from "~/constants/animation";
import { boxRadius } from "~/constants/box/radius";
import {
  PRESENCE_OPACITY,
} from "@brysonandrew/motion-config-constants";
import {
  TUseShowCursorConfig,
  useShowCursor,
} from "~/pics/grid/pic/cursor/use-show-cursor";
import { PicCursorSquare } from "~/pics/grid/pic/cursor/square";
import { useTrillPicsStore } from "~/store/middleware";
import { Sight } from "~/components/cursor";
import { Box } from "~/components/cursor/box";

export const PicCursor: FC<
  TPropsWithChildren<TUseShowCursorConfig>
> = ({ children, ...props }) => {
  const { currCell, size, currKey } =
    props;
  const { scrollY } = useContextGrid();
  const {
    isOnscreen,
    isScrolling,
    hoverKeys,
  } = useTrillPicsStore(
    ({
      hoverKeys,
      isOnscreen,
      isScrolling,
    }) => ({
      hoverKeys,
      isOnscreen,
      isScrolling,
    })
  );

  const position =
    resolvePositionFromCell({
      cell: currCell,
      size,
    });
  const borderRadus = boxRadius();
  const io = {
    opacity: 0,
    scale: 1,
    ...position,
  };
  const isShown = useShowCursor(props);

  return (
    <>
      {/* <MotionConfig
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
      >
        <Sight>
          <Box>
            <span className="column-start">
              {isActiveHover && <div>active hover</div>}

              <div>
                hk:{" "}
                {hoverKeys.join(" - ")}
              </div>
              {!isOnscreen && (
                <span>AFK</span>
              )}
              {isScrolling && (
                <span>
                  scrolling...
                </span>
              )}
              {props.currName ? (
                <div>
                  {props.currName}
                </div>
              ) : (
                <div>no cell</div>
              )}
            </span>
          </Box>
        </Sight>
      </MotionConfig> */}
      <MotionConfig
        transition={{
          ease: "linear",
          duration: 0.1,
        }}
      >
        <motion.div
          key={resolveCompositeKey(
            currKey,
            "scroller"
          )}
          className="fill center text-2xl pointer-events-none"
          style={{
            y: scrollY,
            ...position,
          }}
          whileInView={{
            opacity: 1,
          }}
          initial={io}
          animate={{
            opacity: 0,
            ...position,
          }}
          exit={io}
        >
          <AnimatePresence>
            {isShown && (
              <motion.div
                className="fill center bg-gray-04"
                key={resolveCompositeKey(
                  currKey,
                  "display"
                )}
                {...PRESENCE_OPACITY_06}
              >
                <motion.div
                  className="fill center"
                  key={resolveCompositeKey(
                    currKey,
                    "display"
                  )}
                  {...PRESENCE_OPACITY_04}
                >
                  <motion.div
                    className="fill"
                    key="corners"
                    style={{
                      borderRadius:
                        borderRadus,
                    }}
                    initial={{
                      scale: 0.8,
                    }}
                    animate={{
                      scale: [
                        0.84, 0.9,
                      ],
                    }}
                    exit={{
                      scale: 0.8,
                    }}
                    {...DELAY_TRANSITION_PROPS}

                  >
                    <CursorCorners />
                  </motion.div>
                  <PicCursorSquare
                    key={resolveCompositeKey(
                      "inner-square",
                      currKey
                    )}
                  />
                </motion.div>
                {isShown && (
                  <motion.div
                    className="grayscale-10 contrast-80"
                    key={resolveCompositeKey(
                      "children",
                      currKey
                    )}
                    {...PRESENCE_OPACITY}
                  >
                    {children}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </MotionConfig>
    </>
  );
};
