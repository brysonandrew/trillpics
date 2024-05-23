import type { FC } from "react";
import { motion } from "framer-motion";
import { TMotionPoint } from "@brysonandrew/motion-config-types";
import clsx from "clsx";
import { IconsTrash } from "~/components/icons/video/trash";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { TCommonProps } from "~/pages/video/_common/reorder/types";

type TProps = TMotionPoint &
  TCommonProps &
  Pick<
    TUsePicSelected,
    "names" | "deselect"
  > & {
    trigger: Pick<
      TUsePicSelected,
      "select"
    >["select"];
  };
export const _CommonReorderControls: FC<
  TProps
> = ({
  x,
  y,
  names,
  itemProps,
  boxProps,
  trigger,
  deselect,
}) => {
  const gap = boxProps.style?.gap ?? 0;
  return (
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
      {names.map((name, index) => {
        return (
          <li
            key={name}
            className="relative"
            {...itemProps}
          >
            <button
              className="absolute center top-2 right-2 w-8 h-8 rounded-md _gradient-radial"
              onClick={() => {
                deselect(name);
                console.log(
                  "REMOVE CELL"
                );
                trigger(
                  names.filter(
                    (v) => v !== name
                  )
                );
              }}
            >
              <div className="absolute inset-0.25 bg-black rounded-md" />
              <IconsTrash />
            </button>
            {index !== 0 && (
              <LinesVertical
                style={{
                  left: -gap / 2 - 1,
                }}
              />
            )}
          </li>
        );
      })}
    </motion.ul>
  );
};
