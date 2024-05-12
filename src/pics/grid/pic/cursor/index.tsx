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
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useCellOver } from "~/hooks/pic/cell/over/hook";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";
import { usePicVideo } from "~/hooks/pic/video";

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
    hoverDoneCheck,
  } = useTrillPicsStore(
    ({
      isScrolling,
      isOnscreen,
      isControls,
      hoverDoneCheck,
    }) => ({
      isScrolling,
      isOnscreen,
      isControls,
      hoverDoneCheck,
    })
  );
  const props = usePicVideo();

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
        className="absolute text-3xl"
        style={{
          y: scrollY,
          pointerEvents: "none",
          ...position,
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
          <>
            {hoverDoneCheck() &&
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
                    key="display"
                    className="center fill"
                    {...PRESENCE_OPACITY}
                  >
                    {children}
                  </motion.div>
                </motion.div>
              )}
          </>
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
};
