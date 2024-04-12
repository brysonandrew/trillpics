import type { FC } from "react";
import { motion } from "framer-motion";
import { Pic } from "@components/pics/pic";
import { FadeV } from "@brysonandrew/fade-edge";
import { VideoIcon } from "@pages/home/footer/video/icon";
import { PRESENCE_OPACITY_ANIMATE_DELAY_04 } from "@brysonandrew/animation";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { AddRemoveToVideoMarker } from "@pages/home/pics/columns/cells/image/hover";
import { Background04 } from "@components/decoration/background-04";
import { resolveSrc } from "@components/collection/config/items";
import { VideoModeCounter } from "@/pages/home/pics/columns/cells/image/video-mode-counter";
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
  maxColsCount,
}) => {
  const { cols } = cell.row.original;
  const currCol = cols[colIndex];
  if (!currCol) return null;
  const name = cols[colIndex];
  const src = resolveSrc(name);

  const colsCount = cols.length;
  const rowIndex = cell.row.index;

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
