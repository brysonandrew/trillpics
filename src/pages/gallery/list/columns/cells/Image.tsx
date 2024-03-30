import type { FC } from "react";
import { motion } from "framer-motion";
import { Pic } from "@components/pics/pic";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { Resolve } from "@components/collection/Resolve";
import { FadeV } from "@brysonandrew/fade-edge";
import { ActiveBackground } from "@shell/header/right/active-background";
import {  BORDER_GRADIENT,} from "@constants/css/gradient";
import { VideoIcon } from "@shell/header/right/video/icon";
import { PRESENCE_OPACITY_ANIMATE_DELAY_04, PRESENCE_OPACITY_DURATION_DELAY, TRANSITION } from "@brysonandrew/animation";
import { Background } from "@components/decoration/background";
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
          if (!src) return null;

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
                        {...PRESENCE_OPACITY_DURATION_DELAY}
                      >
                        <h4 className="relative ml-4 mt-4 px-2 font-mono text-white dark:text-gray-5">
                          <Background/>
                          <motion.div className="relative flex gap-2 items-center text-xl"
                          
                          {...PRESENCE_OPACITY_ANIMATE_DELAY_04}
                          >
                          <VideoIcon />
                          #{videoOrder +
                            1}
                          </motion.div>
                        </h4>
                      </ActiveBackground>
                    )}
                  {isHover &&
                    isVideoMode && (
                      <>
                      
                      <motion.h4
                      className="absolute right-5 top-0.5 text-6xl font-mono text-main"
                      initial={
                        {opacity: 0}
                      }
                      animate={{
                        opacity:1,
                        scaleX:videoOrder ===
                        -1 ? 1.2 :1.2,
                        scaleY:videoOrder ===
                        -1 ? 1.2 :1.2,
                        rotate:
                          videoOrder ===
                          -1
                            ? 0
                            : 45,
                      }}
                      transition={{...TRANSITION, delay: 0.4}}
                    >
                        +
                    </motion.h4>
                    <motion.h4
                      className="absolute right-5 top-0.5 text-6xl font-mono text-main-inverted"
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
                      </>
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
