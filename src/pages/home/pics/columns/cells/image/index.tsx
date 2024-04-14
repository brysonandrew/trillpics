import type { FC } from "react";
import { motion } from "framer-motion";
import { Pic } from "@components/pics/pic";
import { FadeV } from "@brysonandrew/fade-edge";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { VideoModeCounter } from "@/pages/home/pics/columns/cells/image/video-mode-counter";
import { resolvePicSrc } from "@/components/collection/config/src";
import { TCell } from "../../config";

type TProps = {
  colIndex: number;
  cell: TCell;
  size: number;
  maxColsCount: number;
};
export const Image: FC<TProps> = ({
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
    <Pic
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
            {isHover && (
              <FadeV
                isFixed={false}
                direction="to top"
                darkEdgeColor="var(--dark-02)"
                lightEdgeColor="var(--light-02)"
              />
            )}
            {isVideoMode && (
              <VideoModeCounter
                isAdded={isAdded}
                isHover={isHover}
                videoOrder={videoOrder}
              />
            )}
          </>
        );
      }}
    </Pic>
  );
};
