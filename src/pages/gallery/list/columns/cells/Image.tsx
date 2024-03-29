import type { FC } from "react";
import { motion } from "framer-motion";
import { Pic } from "@components/pics/pic";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { Resolve } from "@components/collection/Resolve";
import { resolveName } from "@components/collection/config/items";
import { FadeV } from "@brysonandrew/fade-edge";
import { ActiveBackground } from "@shell/header/right/active-background";
import { TCell } from "../config";
import { BORDER_GRADIENT, TEXT_GRADIENT } from "@constants/css/gradient";

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
        console.log(name);
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
                        classValue="row-start opacity-60"
                        style={
                          BORDER_GRADIENT
                        }
                      >
                        <h4
                          className="text-5xl pl-4 font-mono text-gray"
                          style={
                            TEXT_GRADIENT
                          }
                        >
                          #
                          {videoOrder +
                            1}
                        </h4>
                      </ActiveBackground>
                    )}
                  {isHover &&
                    isVideoMode && (
                      <ActiveBackground
                        classValue="center cursor-pointer"
                        style={
                          BORDER_GRADIENT
                        }
                      >
                        <motion.h4
                          className="absolute left-1/2 top-1/2 text-11xl font-mono text-gray"
                          style={{
                            x: "-50%",
                            y: "-50%",
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
                      </ActiveBackground>
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
