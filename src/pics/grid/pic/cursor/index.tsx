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
import { resolveSquare } from "@brysonandrew/measure";
import { CursorCorners } from "~/pics/grid/pic/cursor/corners";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useCellOver } from "~/hooks/pic/cell/over/hook";
import { PicCursorTitle } from "~/pics/grid/pic/cursor/title";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";

export const PicCursor: FC<
  TPropsWithChildren<{
    isDisabled?: boolean;
    title: string;
  }>
> = ({
  title,
  children,
  isDisabled,
}) => {
  const cellOverResult = useCellOver();
  const { scrollY } = useContextGrid();
  const {
    isScrolling,
    isOnscreen,
    isControls,
    hoverKeys,
    hoverKeyCooldown,
  } = useTrillPicsStore(
    ({
      isScrolling,
      isOnscreen,
      isControls,
      hoverKeys,
      hoverKeyCooldown,
    }) => ({
      isScrolling,
      isOnscreen,
      isControls,
      hoverKeys,
      hoverKeyCooldown,
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
  const isHoverKey =
    Boolean(hoverKeyCooldown) ||
    hoverKeys.length > 0;

  return (
    <MotionConfig
      transition={{
        ease: "linear",
        duration: 0.2,
      }}
    >
      <motion.div
        key={resolveCompositeKey(
          "scoller",
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
            {!isDisabled &&
              !isScrolling &&
              isOnscreen &&
              isControls && (
                <motion.div
                  key="display"
                  {...PRESENCE_OPACITY}
                >
                  <CursorCorners />
                  <>
                    {!isHoverKey && (
                      <>
                        {children}
                        <PicCursorTitle key="PicCursorTitle">
                          {title}
                        </PicCursorTitle>
                      </>
                    )}
                  </>
                </motion.div>
              )}
          </>
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
};
