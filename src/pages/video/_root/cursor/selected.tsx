import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { IconsVideo } from "~/components/icons/video/video";
import { useContextGrid } from "~/context";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_1_SVG_PROPS } from "~/shell/global/svg/filters/fat/1";
import { TUsePicSelected } from "~/hooks/pic/selected";

type TProps = TUsePicSelected;
export const Video_RootCursorSelected: FC<
  TProps
> = (props) => {
  const {
    names,
    cells,
    maybeCheck,
    size,
  } = props;
  const { scrollY } = useContextGrid();

  return (
    <AnimatePresence>
      {cells.map((cell, index) => {
        const isMaybe = maybeCheck(
          names[index]
        );

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
          opacity: isMaybe ? 0.4 : 1,
        };
        return (
          <motion.div
            key={names[index]}
            className="absolute p-8 pointer-events-none z-0"
            style={style}
            {...PRESENCE_OPACITY}
          >
            <motion.div className="fill dark:bg-dark-04 bg-dark-01" />
            <motion.button
              title="Remove from video"
              className="relative row"
              animate={io}
              style={{
                transformOrigin:
                  "50% 50% 50%",
              }}
            >
              <IconsVideo size={28} />
              <div className="w-2" />
              <TypographyBordered
                classValue="text-sm mt-0.5"
                shadow={{
                  classValue:
                    "text-sm text-gray",
                }}
                style={
                  FILTERS_FAT_1_SVG_PROPS
                }
              >
                <div className="whitespace-nowrap font-sans">
                  {isMaybe
                    ? ""
                    : `#${index + 1}`}
                </div>
              </TypographyBordered>
            </motion.button>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};
