import type { FC } from "react";
import { motion } from "framer-motion";
import { Pic } from "@components/pics/pic";
import { FadeV } from "@brysonandrew/fade-edge";
import { VideoIcon } from "@shell/header/right/video/icon";
import { PRESENCE_OPACITY_ANIMATE_DELAY_04 } from "@brysonandrew/animation";
import { TCell } from "../../config";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { AddRemoveToVideoMarker } from "@pages/home/pics/columns/cells/image/hover";
import { Background04 } from "@components/decoration/background-04";

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
  const src = cols[colIndex];

  const colsCount = cols.length;
  const rowIndex = cell.row.index;

  const imageConfig =
    resolveConfigFromSize({
      size,
      colIndex,
    });
  return (
    <Pic
      src={src}
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
            {isVideoMode &&
              (isAdded || isHover) && (
                <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-row items-center gap-2 h-14 px-2">
                  {isAdded && (
                    <>
                      <Background04 classValue="fade-in-animation" />
                      <h4 className="relative px-2 font-mono text-white dark:text-gray-5">
                        <motion.div
                          className="relative flex gap-2 items-center text-xl"
                          layout
                          {...PRESENCE_OPACITY_ANIMATE_DELAY_04}
                        >
                          <VideoIcon />#
                          {videoOrder +
                            1}
                        </motion.div>
                      </h4>
                    </>
                  )}
                  {isHover && (
                    <AddRemoveToVideoMarker
                      isAdded={isAdded}
                    />
                  )}
                </div>
              )}
          </>
        );
      }}
    </Pic>
  );
};
