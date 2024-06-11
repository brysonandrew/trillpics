import type { FC } from "react";
import { motion } from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { boxSize } from "~uno/rules/box/size";
import { _RootReorderPlaceholdersList } from "~/pages/video/_root/reorder/placeholders/list";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { useReadyContext } from "~/shell/ready/context";
import clsx from "clsx";

export const _RootReorderPlaceholders: FC =
  () => {
    0;
    const {
      screen,
      main: { dragger },
    } = useReadyContext();

    const s = boxSize();
    const isColumn =
      screen.container.width < 600;
    const width =
      screen.container.width -
      (isColumn ? s.m : s.m3);
    const left = isColumn
      ? s.m05
      : s.m25;
    const gap =
      TOTAL_GAP / (MAX_COUNT - 1);
    const size =
      (width - TOTAL_GAP) /
      (isColumn ? 1 : MAX_COUNT);
    const height = size;
    const boxStyle = {
      gap,
      height,
      width,
      left,
      top: s.m4,
    };
    const boxProps = {
      className: clsx(
        "absolute z-0",
        isColumn ? "column" : "row"
      ),
      style: boxStyle,
    } as const;
    const imageDimensions =
      resolveSquare(size);
    const itemDimensions = isColumn
      ? {
          height:
            size / MAX_COUNT + s.m05,
          width: size,
        }
      : imageDimensions;
    return (
      <motion.div
        className="absolute z-0"
        style={{
          ...boxStyle,

          y: dragger.y06,
        }}
      >
        <_RootReorderPlaceholdersList
          boxProps={boxProps}
          itemDimensions={
            itemDimensions
          }
          isColumn={isColumn}
        />
      </motion.div>
    );
  };
