import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextGrid } from "~/context";
import { useReady } from "~/hooks/use-ready";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { CursorCorners } from "~/pics/grid/pic/cursor/corners";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useCellOver } from "~/hooks/pic/cell/over/hook";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";
import {
  DELAY_04_TRANSITION_PROPS,
  DELAY_TRANSITION_PROPS,
  PRESENCE_OPACITY_06,
} from "~/constants/animation";
import { boxRadius } from "~/constants/box/radius";

export const PicCursor: FC<
  TPropsWithChildren<{
    isDisabled?: boolean;
    onClick?(): void;
  }>
> = ({
  onClick,
  children,
  isDisabled,
}) => {
  const cellOverResult = useCellOver();
  const { scrollY } = useContextGrid();
  const {
    isScrolling,
    isOnscreen,
    isControls,
    isActiveHover,
  } = useTrillPicsStore(
    ({
      isScrolling,
      isOnscreen,
      isControls,
      isActiveHover,
    }) => ({
      isScrolling,
      isOnscreen,
      isControls,
      isActiveHover,
    })
  );

  const isReady = useReady();
  const position =
    resolvePositionFromCell(
      cellOverResult
    );
  const borderRadus = boxRadius();

  const io = {
    opacity: 0,
    scale: 1,
    ...position,
  };
  return (
    <MotionConfig
      transition={{
        ease: "linear",
        duration: isScrolling ? 0 : 0.2,
      }}
    >
      <motion.div
        key={resolveCompositeKey(
          "scroller",
          `${isReady}`
        )}
        className="fill center text-2xl cursor-pointer pointer-events-none"
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
        <MotionConfig
          transition={{
            ease: "linear",
            duration: isScrolling
              ? 0
              : 0.2,
          }}
        >
          <AnimatePresence>
            {!isActiveHover &&
              !isDisabled &&
              isOnscreen &&
              isControls && (
                <motion.div
                  className="fill center"
                  key={resolveCompositeKey(
                    "display"
                  )}
                  {...PRESENCE_OPACITY_06}
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
                  <motion.div
                    key="inner-square"
                    className="absolute left-1/6 top-1/6 w-2/3 h-2/3 border border-white dark:border-black opacity-60"
                    style={{
                      borderRadius:
                        borderRadus,
                    }}
                    initial={{
                      opacity: 0.1,
                      scale: 1,
                    }}
                    animate={{
                      scale: 0.8,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 1,
                      opacity: 0.1,
                    }}
                    {...DELAY_04_TRANSITION_PROPS}
                  ></motion.div>
                </motion.div>
              )}
            <div
              className="grayscale-10 contrast-80 _outline-filter"
              key="children"
            >
              {children}
            </div>
          </AnimatePresence>
        </MotionConfig>
      </motion.div>
    </MotionConfig>
  );
};
