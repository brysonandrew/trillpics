import type { FC } from "react";
import { motion } from "framer-motion";
import { Pic } from "@components/pics/pic";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { Resolve } from "@components/collection/Resolve";
import { resolveName } from "@components/collection/config/items";
import { FadeV } from "@brysonandrew/fade-edge";
import { ActiveBackground } from "@shell/header/right/active-background";
import {
  BORDER_GRADIENT,
  TEXT_GRADIENT,
} from "@constants/css/gradient";
import { VideoIcon } from "@shell/header/right/video/icon";
import { TCell } from "../config";

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
  const [_, resolver] = cols[colIndex];
  const colsCount = cols.length;
  const rowIndex = cell.row.index;

  return (
    <Resolve resolver={resolver}>
      {(src) => {
        const imageConfig =
          resolveConfigFromSize({
            size,
            colIndex,
          });
        const name = resolveName(
          src ?? ""
        );
        return (
          <Pic
            name={parseInt(name)}
            boxChildren={null}
            {...imageConfig}
          >
            {({
              designProps,
              isHover,
              isVideoMode,
              videoOrder,
            }) => {
              if (!src) return null;
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
                    videoOrder > -1 && (
                      <ActiveBackground
                        classValue="row-start"
                        style={
                          BORDER_GRADIENT
                        }
                      >
                        <h4 className="flex items-center gap-4 text-2xl ml-4 mt-4 px-2 border-main-inverted bg-main border-2 font-mono text-main">
                          <VideoIcon />
                          #{videoOrder +
                            1}
                        </h4>
                      </ActiveBackground>
                    )}
                  {isHover &&
                    isVideoMode && (
                      <motion.h4
                      className="absolute right-5 top-0.5 text-6xl font-mono text-main-inverted"
                      style={{
                        ...TEXT_GRADIENT,
                      }}
                      initial={
                        false
                      }
                      animate={{
                        rotate:
                          videoOrder ===
                          -1
                            ? 0
                            : 45,
                      }}
                    >
                        +
                    </motion.h4>
                    )}
                </>
              );
            }}
          </Pic>
        );
      }}
    </Resolve>
  );
};
