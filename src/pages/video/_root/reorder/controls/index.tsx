import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsTrash } from "~/components/icons/video/trash";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { boxSize } from "~uno/rules/box/size";
import { IconsPlusQuestion } from "~/components/icons/plus";
import { boxRadius } from "~uno/rules/box/radius";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { TMotionPoint } from "@brysonandrew/motion-config-types";
import { TDimensions } from "@brysonandrew/config-types";
import { PillBSm } from "~/components/buttons/pill/b/sm";
import { resolveLayoutId } from "~/pages/video/_root/reorder/placeholders/list";
import { DELAY_06_TRANSITION_PROPS } from "~/constants/animation";

type TProps = TMotionPoint &
  Pick<TCommonProps, "itemDimensions"> &
  Pick<
    TUsePicSelected,
    "deselect" | "add" | "pics"
  > & {
    index: number;
    title: string;
    name: string;
    imageDimensions: TDimensions;
    isColumn: boolean;
  };

export const _RootReorderControls: FC<
  TProps
> = ({
  itemDimensions,
  imageDimensions,
  deselect,
  add,
  pics,
  index,
  title,
  name,
  x,
  isColumn,
  y,
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();

  return (
    <motion.div
      className="absolute"
      style={{
        ...imageDimensions,
        x,
        y,
        top: isColumn
          ? itemDimensions.height *
            index
          : -s.m15,
        zIndex: index,
      }}
    >
      <motion.div
        key={`group-${index}`}
        className="absolute w-full row-start-space border border-white-06 dark:border-black-06 bg-white-01 dark:bg-black-01 backdrop-blur-sm"
        style={{
          borderRadius:
            borderRadius / 2,
          padding: s.padding,
          ...itemDimensions,
        }}
        layoutId={resolveLayoutId(index)}
        {...PRESENCE_OPACITY}
      >
        <PillBSm
          title="Replace with random pic"
          onClick={() => {
            const randomName =
              pics[
                ~~(
                  (pics.length - 1) *
                  Math.random()
                )
              ];

            add(randomName, name);
          }}
          iconProps={{
            Icon: IconsPlusQuestion,
          }}
        />
        <PillBSm
          title={`Delete pic from video`}
          onClick={() => deselect(name)}
          iconProps={{
            Icon: IconsTrash,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
