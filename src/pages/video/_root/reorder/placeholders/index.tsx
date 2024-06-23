import type { FC } from "react";
import { motion } from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { box } from "~uno/rules/box";
import { _RootReorderPlaceholdersList } from "~/pages/video/_root/reorder/placeholders/list";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { useContextReady } from "~/shell/ready/context";
import clsx from "clsx";
import { HOVER_KEY_RootReorderList } from "~/pages/video/_root/reorder/list";
import { useTrillPicsStore } from "~/store/middleware";
import { TUsePicSelected } from "~/hooks/pic/selected";

export type TRootReorderPlaceholdersProps =
  Pick<TUsePicSelected, "names">;
export const _RootReorderPlaceholders: FC<
  TRootReorderPlaceholdersProps
> = ({ names }) => {
  0;
  const {
    screen,
    main: { dragger },
  } = useContextReady();

  const { hoverKeys, isHover } =
    useTrillPicsStore(
      ({
        hoverKeys,
        isControls,
        isHover,
      }) => ({
        hoverKeys,
        isControls,
        isHover,
      })
    );

  const isHovering = isHover(
    HOVER_KEY_RootReorderList
  );

  
  const isColumn =
    screen.container.width < 600;
  const width =
    screen.container.width -
    (isColumn ? box.m : box.m3);
  const left = isColumn ? box.m05 : box.m25;
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
    top: box.m4,
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
          size / MAX_COUNT + box.m05,
        width: size,
      }
    : imageDimensions;
  return (
    <motion.div
      className="absolute z-0"
      animate={{
        opacity: isHovering ? 0.8 : 0.5,
      }}
      style={{
        ...boxStyle,

        y: dragger.y06,
      }}
    >

      <_RootReorderPlaceholdersList
        names={names}
        boxProps={boxProps}
        itemDimensions={itemDimensions}
        isColumn={isColumn}
      />
    </motion.div>
  );
};
