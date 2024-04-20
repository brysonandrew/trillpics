import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Control } from "~/components/pic/control";
import { FadeV } from "@brysonandrew/fade-edge";
import { VideoModeCounter } from "~/components/pic/video-mode-counter";
import { FADE_PRESENCE } from "~/constants/animation";
import { TCell } from "~/pages/home/pics/columns/config";
import { resolveConfigFromSize } from "~/utils/dimensions/resolveDimensionsFromSize";
import { resolvePicSrc } from "~/utils/src";
import { PillB } from "~/components/buttons/pill/b";
import {
  IconsPicZoom2 as IconsPicZoom,
  IconsPicZoom2,
} from "~/components/icons/pic/zoom2";
import clsx from "clsx";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";
import { IconsPicZoomIn40 } from "~/components/icons/pic/zoom-in/40";
import { PillBHover } from "~/components/buttons/pill/b/hover";

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
              draggable={false}
            />
            <AnimatePresence>
              {isHover && (
                <motion.div
                  key="zoom"
                  className={clsx(
                    "absolute cursor-pointer z-50 rounded-full center",
                    "top-3 right-3"
                  )}
                  {...FADE_PRESENCE}
                >
                  {isVideoMode ? (
                    <PillB
                      isFlat
                      title="Zoom pic"
                      Icon={
                        IconsPicZoomIn24
                      }
                      onClick={onToggle}
                    />
                  ) : (
                    <IconsPicZoomIn24 />
                  )}
                </motion.div>
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
                    darkEdgeColor="var(--dark-04)"
                    midColor="var(--gray-01)"
                    lightEdgeColor="var(--light-02)"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {isVideoMode && (
              <motion.div
                key="video mode counter"
                className="absolute left-1/2 top-1/2 -translate-1/2"
                {...FADE_PRESENCE}
              >
                <VideoModeCounter
                  isAdded={isAdded}
                  isHover={isHover}
                  videoOrder={
                    videoOrder
                  }
                />
              </motion.div>
            )}
          </>
        );
      }}
    </Control>
  );
};
