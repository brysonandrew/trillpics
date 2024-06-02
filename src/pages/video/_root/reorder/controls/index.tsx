import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { TMotionPoint } from "@brysonandrew/motion-config-types";
import clsx from "clsx";
import { IconsTrash } from "~/components/icons/video/trash";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { boxSize } from "~uno/rules/box/size";
import { useHoverKey } from "~/hooks/use-hover-key";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { _CommonReorderControlsButton } from "~/pages/video/_root/reorder/controls/button";
import { IconsPlusQuestion } from "~/components/icons/plus";
import { boxRadius } from "~uno/rules/box/radius";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useReadyContext } from "~/shell/ready/context";
import { _CommonReorderControl } from "~/pages/video/_root/reorder/controls/control";

type TProps = TMotionPoint &
  TCommonProps &
  Pick<
    TUsePicSelected,
    | "names"
    | "deselect"
    | "add"
    | "pics"
  >;

export const _CommonReorderControls: FC<
  TProps
> = ({
  x,
  y,
  names,
  itemDimensions,
  boxProps,
  deselect,
  add,
  pics,
  isColumn,
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  const { main } = useReadyContext();
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
      className="absolute z-0"
      style={{
        x,
        y,
        ...boxProps.style,
        top: s.m075,
      }}
    >
      <motion.div
        className={clsx(
          "absolute left-0 top-0 w-full",
          isColumn ? "column" : "row"
        )}
        style={{
          gap: boxProps.style?.gap,
        }}
      >
        {names.map((name, index) => {
          const key =
            resolveCompositeKey(
              name,
              "delete"
            );
          return null;
          // <_CommonReorderControl
          //   key={key}
          //   name={name}
          //   title={key}
          //   index={index}
          //   itemDimensions={
          //     itemDimensions
          //   }
          //   deselect={deselect}
          //   add={add}
          //   pics={pics}
          // />
        })}
      </motion.div>
    </motion.div>
  );
};
