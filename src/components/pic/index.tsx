import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Control } from "@/components/pic/control";
import { FadeV } from "@brysonandrew/fade-edge";
import { VideoModeCounter } from "@/components/pic/video-mode-counter";
import { FADE_PRESENCE } from "@/constants/animation";
import { TCell } from "@/pages/home/pics/columns/config";
import { resolveConfigFromSize } from "@/utils/dimensions/resolveDimensionsFromSize";
import { resolvePicSrc } from "@/utils/src";
import { PillB } from "@/components/buttons/pill/b";
import { IconsPicZoom2 as IconsPicZoom } from "@/components/icons/pic/zoom2";
import clsx from "clsx";

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
        onToggle,
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
              {isHover && (
                <div
                  key="zoom"
                  className={clsx(
                    "absolute cursor-pointer z-50 rounded-full center",
                    isVideoMode
                      ? "top-3 right-3"
                      : "top-1/2 left-1/2 -translate-1/2 scale-200"
                  )}
                >
                  {isVideoMode ? (
                    <PillB
                      title="zoom"
                      Icon={
                        IconsPicZoom
                      }
                      onClick={onToggle}
                      isFlat
                      {...FADE_PRESENCE}
                    />
                  ) : (
                    <IconsPicZoom />
                  )}
                </div>
              )}
              {(isHover || isAdded) && (
                <motion.div
                  key="fadev"
                  {...FADE_PRESENCE}
                >
                  <FadeV
                    key="ImageFadeV"
                    isFixed={false}
                    direction="to top left"
                    darkEdgeColor="var(--dark-06)"
                    midColor="var(--gray-05)"
                    lightEdgeColor="var(--light-02)"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {isVideoMode && (
              <>
                <div className="absolute left-1/2 top-1/2 -translate-1/2">
                  <VideoModeCounter
                    isAdded={isAdded}
                    isHover={isHover}
                    videoOrder={
                      videoOrder
                    }
                  />
                </div>
              </>
            )}
          </>
        );
      }}
    </Control>
  );
};
