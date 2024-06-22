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
import { VideoRootReorderBox } from "~/pages/video/_root/reorder/box";

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
      <VideoRootReorderBox
        key={`group-${index}`}
        index={index}
        style={itemDimensions}
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
      </VideoRootReorderBox>
    </motion.div>
  );
};
