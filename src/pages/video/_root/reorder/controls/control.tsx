import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { IconsTrash } from "~/components/icons/video/trash";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { boxSize } from "~/constants/box/size";
import { useHoverKey } from "~/hooks/use-hover-key";
import { _CommonReorderControlsButton } from "~/pages/video/_root/reorder/controls/button";
import { IconsPlusQuestion } from "~/components/icons/plus";
import { boxRadius } from "~/constants/box/radius";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useContextReady } from "~/shell/ready/context";
import { TMotionPoint } from "@brysonandrew/motion-config-types";
import { TDimensions } from "@brysonandrew/config-types";

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

export const _CommonReorderControl: FC<
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
  const { main } = useContextReady();
  const start = () => {
    main.cursor.isOnGrid = false;
  };
  const stop = () => {
    main.cursor.isOnGrid = true;
  };
  const { motionHandlers } =
    useHoverKey({
      handlers: { start, stop },
    });

  return (
    <motion.div
      className="absolute"
      style={{
        ...imageDimensions,
        x,
        y,
        // ...boxProps.style,
        top: isColumn
          ? itemDimensions.height *
            index
          : 0,
        zIndex: index,
        // top: 0, // -s.m025 - s.m0125,
      }}
      {...motionHandlers(title)}
    >
      <AnimatePresence>
        <motion.div
          key={`group-${index}`}
          className="absolute w-full row-start-space border border-white-06 dark:border-black-06 bg-white-01 dark:bg-black-01 backdrop-blur-sm"
          style={{
            borderRadius:
              borderRadius / 2,
            padding: s.padding,
            ...itemDimensions,
          }}
          {...PRESENCE_OPACITY}
        >
          <_CommonReorderControlsButton
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
            currName={name}
          />
          <_CommonReorderControlsButton
            title={`Delete pic from video`}
            onClick={() =>
              deselect(name)
            }
            iconProps={{
              Icon: IconsTrash,
            }}
            currName={name}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
