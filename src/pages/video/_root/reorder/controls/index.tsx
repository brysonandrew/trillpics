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
import { boxSize } from "~/constants/box/size";
import { useHoverKey } from "~/hooks/use-hover-key";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { _CommonReorderControlsButton } from "~/pages/video/_root/reorder/controls/button";
import { IconsPlusQuestion } from "~/components/icons/plus";
import { boxRadius } from "~/constants/box/radius";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useContextGrid } from "~/context";

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
  itemStyle,
  boxProps,
  deselect,
  add,
  pics,
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  const { main } = useContextGrid();
  const start = () => {
    main.cursor.isOnGrid = false;
  };
  const stop = () => {
    main.cursor.isOnGrid = true;
  };
  const { motionHandlers } = useHoverKey({
    handlers: { start, stop },
  });

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        ...boxProps.style,
        top: s.m075,
      }}
    >
      <motion.ul
        className={clsx(
          "absolute row left-0 top-0 w-full"
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
          return (
            <motion.li
              key={`group-${index}`}
              className="relative"
              style={{
               ...itemStyle,
                top:0,// -s.m025 - s.m0125,
              }}
              {...motionHandlers(key)}
            >
              <AnimatePresence>
                <motion.div
                  key={`group-${index}`}
                  className="absolute w-full row-start-space border border-white-06 dark:border-black-06 bg-white-01 dark:bg-black-01 backdrop-blur-sm"
                  style={{
                    borderRadius:
                      borderRadius / 2,
                    padding: s.padding,
              ...itemStyle
                  }}
                  {...PRESENCE_OPACITY}
                >
                  <_CommonReorderControlsButton
                    title="Replace with random pic"
                    onClick={() => {
                      const randomName =
                        pics[
                          ~~(
                            (pics.length -
                              1) *
                            Math.random()
                          )
                        ];

                      add(
                        randomName,
                        name
                      );
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
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
