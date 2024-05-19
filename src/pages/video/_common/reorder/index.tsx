import type { FC } from "react";
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
import { boxSize } from "~/constants/box/size";
import { useTrillPicsStore } from "~/store/middleware";
export const MAX_COUNT = 5;
export const TOTAL_GAP = 40;

export const _CommonReorder: FC =
  () => {
    const {
      size: _size,
      names,
      count,
      reorder,
    } = usePicVideo();
    const { screen } =
      useTrillPicsStore(
        ({ screen }) => ({ screen })
      );
    if (!screen.isDimensions)
      return null;
    if (count === 0) return null;
    const s = boxSize();
    const size =
      screen.width / MAX_COUNT;
    const containerProps = {
      className: "absolute row",
      style: {
        gap: TOTAL_GAP / MAX_COUNT,
        height: size,
        width: screen.width,
        left: -s.m,
      },
    } as const;
    const itemProps = {
      style: {
        ...resolveSquare(size),
      },
    } as const;
    return (
      <Dragger {...containerProps}>
        {(x, y) => {
          return (
            <motion.div
              {...containerProps}
              style={{
                x,
                y,
                ...containerProps.style,
              }}
            >
              <ul {...containerProps}>
                {[
                  ...Array(MAX_COUNT),
                ].map((_, index) => (
                  <li
                    key={`${index}`}
                    {...itemProps}
                    className={clsx(
                      "border border-white"
                    )}
                  ></li>
                ))}
              </ul>
              <Reorder.Group
                axis="x"
                values={names}
                onReorder={reorder}
                {...containerProps}
              >
                {names.map((name) => {
                  isVNumber(size);
                  return (
                    <Reorder.Item
                      key={name}
                      value={name}
                      {...itemProps}
                    >
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
