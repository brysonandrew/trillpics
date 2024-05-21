import type { FC, PropsWithChildren } from "react";
import {
  motion,
  Reorder,
} from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { usePicVideo } from "~/hooks/pic/video";
import { PicDisplay } from "~/pics/grid/pic/display";
import { resolvePicSrc } from "~/utils/src";
import { isVNumber } from "~/utils/validation/is/number";
import { Dragger } from "~/pages/video/_common/reorder/dragger";
import clsx from "clsx";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~/constants/box/size";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { IconsTrash } from "~/components/icons/video/trash";
export const MAX_COUNT = 5;
export const TOTAL_GAP = 40;

export const _CommonReorder: FC<PropsWithChildren> =
  ({children}) => {
    const {
      size: _size,
      names,
      reorder,
      cells,
      remove,
      removingCheck,
      setPics,
      clearRemoving,
    } = usePicVideo();
    const { screen } =
      useTrillPicsStore(
        ({ screen }) => ({ screen })
      );
    if (!screen.isDimensions)
      return null;
    const s = boxSize();
    const width =
      screen.container.width - s.m;
    const gap =
      TOTAL_GAP / (MAX_COUNT - 1);
    const size =
      (width - TOTAL_GAP) / MAX_COUNT;
    const height = size;
    const boxProps = {
      className: "absolute row",
      style: {
        gap,
        height,
        width,
      },
    } as const;
    const itemProps = {
      style: {
        ...resolveSquare(size),
      },
    } as const;

    const { trigger } = useTimebomb(
      400,
      setPics
    );
    return (
      <Dragger
        width={width}
        height={height}
        container={screen.container}
      >
        {(x, y) => {
          return (
            <motion.div
              style={{
                x,
                y,
              }}
            >
            {children}
              <motion.ul
                style={{
                  x,
                  y,
                  ...boxProps.style,
                }}
                className={clsx(
                  "absolute row",
                  // "border dark:border-white border-black",
                  "dark:bg-white-01 bg-black-01 backdrop-blur-sm"
                )}
              >
                {cells.map(
                  (cell, index) => {
                    const name =
                      names[index];
                    // const nameRemoving = encryptRemoving(name);
                    // const check =
                    //   removingCheck(nameRemoving);
                    // console.log(check);
                    return (
                      <li
                        key={name}
                        className="relative"
                        {...itemProps}
                      >
                        <button
                          className="absolute center top-2 right-2 w-8 h-8 rounded-md _gradient-radial"
                          onClick={() => {
                            remove(
                              cell
                            );
                            console.log(
                              "REMOVE CELL"
                            );
                            trigger(
                              names.filter(
                                (v) =>
                                  v !==
                                  name
                              )
                            );
                          }}
                        >
                          <div className="absolute inset-0.25 bg-black rounded-md" />
                          <IconsTrash />
                        </button>
                        {index !==
                          0 && (
                          <LinesVertical
                            style={{
                              left:
                                -boxProps
                                  .style
                                  .gap /
                                  2 -
                                1,
                            }}
                          />
                        )}
                      </li>
                    );
                  }
                )}
              </motion.ul>
              <ul {...boxProps}>
                {[
                  ...Array(MAX_COUNT),
                ].map((_, index) => (
                  <li
                    key={`${index}`}
                    className={clsx(
                      "relative",
                      "border border-white dark:border-black bg-white-01 dark:bg-black-01 backdrop-blur-sm"
                    )}
                    {...itemProps}
                  >
                    {index !== 0 && (
                      <LinesVertical
                        style={{
                          left:
                            -boxProps
                              .style
                              .gap /
                              2 -
                            1,
                        }}
                      />
                    )}
                  </li>
                ))}
              </ul>
              <Reorder.Group
                axis="x"
                values={names}
                onReorder={reorder}
                {...boxProps}
              >
                {names.map((name) => {
                  isVNumber(size);
                  return (
                    <Reorder.Item
                      key={name}
                      value={name}
                      {...itemProps}
                    >
                      {removingCheck(
                        name
                      ) ? (
                        <div
                          className="fill bg-gray"
                          {...itemProps}
                        />
                      ) : (
                        <PicDisplay
                          name={name}
                          src={resolvePicSrc(
                            name
                          )}
                          whileTap={{
                            cursor:
                              "grabbing",
                          }}
                          {...itemProps}
                        />
                      )}
                    </Reorder.Item>
                  );
                })}
              </Reorder.Group>
            </motion.div>
          );
        }}
      </Dragger>
    );
  };
