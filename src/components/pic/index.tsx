import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Control } from "@/components/pic/control/control";
import { FadeV } from "@brysonandrew/fade-edge";
import { resolveConfigFromSize } from "@/utils/dimensions/resolveDimensionsFromSize";
import { VideoModeCounter } from "@/components/pic/video-mode-counter";
import { resolvePicSrc } from "@/components/collection/config/src";
import { PRESENCE_OPACITY, PRESENCE_OPACITY_ANIMATE_DELAY_04, PRESENCE_OPACITY_DELAY, PRESENCE_OPACITY_DURATION_DELAY } from "@brysonandrew/animation";
import { TCell } from "../../pages/home/pics/columns/config";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "@/constants/animation";

type TProps = {
  colIndex: number;
  cell: TCell;
  size: number;
  maxColsCount: number;
};
export const Pic: FC<TProps> = ({
  colIndex,
  cell,
  size,
}) => {
  const { cols } = cell.row.original;
  const currCol = cols[colIndex];
  if (!currCol) return null;
  const name = cols[colIndex];
  const src = resolvePicSrc(name);

  const imageConfig =
    resolveConfigFromSize({
      size,
      colIndex,
    });
  return (
    <Control
      name={name}
      boxChildren={null} 
      {...imageConfig}
    >
      {({
        designProps,
        isHover,
        isVideoMode,
        videoOrder,
      }) => {
        const isAdded = videoOrder > -1;
        return (
          <>
            <motion.img
              {...designProps}
              src={src}
              alt={src}
              layoutId={src}
            />
            <AnimatePresence>
              {(isHover||isAdded) && (
                <motion.div
                  {...PRESENCE_OPACITY_DURATION_DELAY}
                >
                  <FadeV
                    key="ImageFadeV"
                    isFixed={false}
                    direction="to top left"
                    darkEdgeColor="var(--dark-06)"
                    midColor="var(--gray-05)"
                    lightEdgeColor="var(--light-06)"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {isVideoMode && (
              <div className="absolute absolute left-1/2 top-1/2 -translate-1/2">
                <VideoModeCounter
                  isAdded={isAdded}
                  isHover={isHover}
                  videoOrder={
                    videoOrder
                  }
                />
              </div>
            )}
          </>
        );
      }}
    </Control>
  );
};
