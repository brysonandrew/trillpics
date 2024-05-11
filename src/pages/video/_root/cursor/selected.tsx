import type { FC } from "react";
import { motion } from "framer-motion";
import { TUsePicVideoResult } from "~/hooks/pic/video";
import { PillB } from "~/components/buttons/pill/b";
import { IconsVideo } from "~/components/icons/video/video";
import { resolveGradient } from "@brysonandrew/color-gradient";
import { resolveBoxBackground } from "@brysonandrew/utils-box";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useContextGrid } from "~/context";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";

type TProps = TUsePicVideoResult;
export const Video_RootCursorSelected: FC<
  TProps
> = (props) => {
  const {
    names,
    cells,
    keys,
    currKey,
    isCurrAdded,
    size,
  } = props;
  const { scrollY } = useContextGrid();
  return (
    <>
      {cells.map(
        (
          cell,
          index,
          { length: count }
        ) => {
          const isMaybe =
            keys[index] === currKey &&
            !isCurrAdded;
          const ringSize =
            size /
            (isCurrAdded
              ? count
              : count - 1);

          const spiral =
            resolveBoxBackground({
              image: resolveGradient({
                name: "repeating-radial-gradient",
                parts: [
                  "rgba(0,0,0,0.1)",
                  `rgba(0,0,0,0.2) ${ringSize}px`,
                  `transparent ${ringSize}px`,
                  `transparent ${
                    ringSize * 2
                  }px`,
                ],
              }),
            });

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
              initial={false}
            >
              <motion.div
                key="spiral"
                className="fill bg-black-01"
                style={{
                  ...spiral,
                }}
                {...PRESENCE_OPACITY}
              />
              <PillB
                title="Remove from video"
                Icon={IconsVideo}
                initial={io}
                animate={{
                  opacity: isMaybe
                    ? 0.7
                    : 1,
                  scale: isMaybe
                    ? 0.9
                    : 1,
                }}
                exit={io}
                isFlat
              >
                <motion.span
                  layout
                >{`#${
                  index + 1
                }`}</motion.span>
                <div className="w-2" />
              </PillB>
            </motion.div>
          );
        }
      )}
    </>
  );
};
