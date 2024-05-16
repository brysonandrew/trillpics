import type { FC } from "react";
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
import {
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_DELAY,
} from "@brysonandrew/motion-config-constants";
import { useCellOver } from "~/hooks/pic/cell/over/hook";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";

export const PicCursor: FC<
  TPropsWithChildren<{
    isDisabled?: boolean;
  }>
> = ({ children, isDisabled }) => {
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

  const io = {
    opacity: 0,
    scale: 1.2,
    ...position,
  };
  return (
    <MotionConfig
      transition={{
        ease: "linear",
        duration: 0.2,
      }}
    >
      <motion.div
        key={resolveCompositeKey(
          "scroller",
          `${isReady}`
        )}
        className="absolute text-2xl"
        style={{
          y: scrollY,
          pointerEvents: "none",
        }}
        whileInView={{
          opacity: 1,
        }}
        initial={io}
        animate={{
          scale: 1,
          opacity: 0,
          ...position,
        }}
        exit={io}
      >
        <AnimatePresence>
          {!isActiveHover &&
            !isDisabled &&
            !isScrolling &&
            isOnscreen &&
            isControls && (
              <motion.div
                key="display"
                {...PRESENCE_OPACITY}
              >
                <CursorCorners />
                <motion.div
                  key="children"
                  className="center fill font-sans"
                  {...PRESENCE_OPACITY_DELAY}
                >
                  {children}
                </motion.div> 
              </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
};
