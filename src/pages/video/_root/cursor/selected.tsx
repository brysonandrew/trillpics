import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { TUsePicVideoResult } from "~/hooks/pic/video";
import { PillB } from "~/components/buttons/pill/b";
import { IconsVideo } from "~/components/icons/video/video";
import { useContextGrid } from "~/context";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";
import { PillBStill } from "~/components/buttons/pill/b/still";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

type TProps = TUsePicVideoResult;
export const Video_RootCursorSelected: FC<
  TProps
> = (props) => {
  const {
    names,
    cells,
    currName,
    isCurrAdded,
    size,
  } = props;
  const { scrollY } = useContextGrid();

  return (
    <AnimatePresence>
      {cells.map(
        (
          cell,
          index,
          { length: count }
        ) => {
          const isMaybe =
            names[index] === currName &&
            !isCurrAdded;
          // const ringSize =
          //   size /
          //   (isCurrAdded
          //     ? count
          //     : count - 1);

          const position =
            resolvePositionFromCell({
              cell,
              size,
            });
          const style = {
            y: scrollY,
            ...position,
          };
          const io = {
            opacity: isMaybe ? 0 : 1,
            scale: isMaybe ? 0 : 1,
          };
          return (
            <motion.div
              key={names[index]}
              className="absolute p-8 pointer-events-none"
              style={style}
              {...PRESENCE_OPACITY}
            >
              <motion.div className="fill dark:bg-dark-04 bg-light-04" />
              <PillB
                title="Remove from video"
                Icon={IconsVideo}
                initial={io}
                exit={io}
                size="sm"
                animate={{
                  opacity: isMaybe
                    ? 0.7
                    : 1,
                  scale: isMaybe
                    ? 0.8
                    : 0.9,
                }}
                isFlat
              >
                {`#${index + 1}`}
              </PillB>
            </motion.div>
          );
        }
      )}
    </AnimatePresence>
  );
};
{
  /* <motion.span
layout
></motion.span>
<div className="w-2" /> */
}
