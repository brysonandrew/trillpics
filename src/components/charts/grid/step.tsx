import type { FC } from "react";
import { motion } from "framer-motion";
import { TButtonMotionProps } from "@brysonandrew/config-types";
import { resolveSquare } from "@brysonandrew/measure";
import clsx from "clsx";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { boxRadius } from "~uno/rules/box/radius";
import { isNumber } from "~/utils/validation/is/number";
import { boxSize } from "~uno/rules/box/size";
import { TBeatsStepsKey } from "~/hooks/music/beats/types";
import { TMidiValue } from "~/hooks/music/midis/types";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveToMidiHoverKey } from "~/components/charts/grid/to-midi-hover-key";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isNull } from "~/utils/validation/is/null";
import { RANDOM_MIDI_RANGE } from "~/constants/music/midis";
import { useSoundLookup } from "~/hooks/music/lookup";
import { resolveTop } from "~/components/charts/grid/top";

type TProps = Omit<
  TButtonMotionProps,
  "value"
> & {
  columnIndex: number;
  rowIndex: number;
  value: TMidiValue;
  stepsKey: TBeatsStepsKey | "synth";
};
export const ChartsGridStep: FC<
  TProps
> = ({
  columnIndex,
  rowIndex,
  style,
  value,
  stepsKey,
  ...props
}) => {
  const isSynth = stepsKey === "synth";
  // const lookup = useSoundLookup();
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const borderRadius = boxRadius();
  const { gridCellsRecord } =
    useMusicInitContext();
  const key = `${columnIndex}-${value}`;
  const s = boxSize();
  const realMidiValue =
    (synth.midi ?? 0) + (value ?? 0);
  const midi = isSynth
    ? realMidiValue
    : value;
  const hoverKey =
    resolveToMidiHoverKey(
      midi,
      columnIndex,
      rowIndex
    );
  const { motionHandlers, isHover } =
    useHoverKey();
  const isHovering = isNull(hoverKey)
    ? false
    : isHover(hoverKey);
  const isNullValue = value === null;

  return (
    <motion.button
      // onClick={() => {
      //   if (isNull(midi)) return;
      //   lookup[stepsKey].play(
      //     0,
      //     midi,
      //     {}
      //   );
      // }}
      key={`${columnIndex}`}
      className="center relative"
      style={{
        ...style,
        ...(isSynth
          ? {
              top: isNullValue
                ? 1
                : resolveTop(value),
              // top: isNullValue
              //   ? 1
              //   : `${
              //       (value /
              //         RANDOM_MIDI_RANGE) *
              //         80 +
              //       10
              //     }%`,
            }
          : { top:0 }),
        marginTop: -s.m0125,

        ...resolveSquare(s.m05),
      }}
      {...props}
      {...(isNull(hoverKey) || !isSynth
        ? {}
        : motionHandlers(hoverKey))}
    >
      <motion.div
        key={key}
        ref={(instance) => {
          if (!gridCellsRecord[key]) {
            gridCellsRecord[key] = [];
          }
          if (
            !gridCellsRecord[key][
              rowIndex
            ]
          ) {
            gridCellsRecord[key][
              rowIndex
            ] = [];
          }
          const gridCell =
            gridCellsRecord[key]?.[
              rowIndex
            ]?.[columnIndex];
          if (instance && !gridCell) {
            gridCellsRecord[key][
              rowIndex
            ][columnIndex] = instance;
          }
        }}
        className={clsx("bg-white")}
        style={{
          position: "relative",
          top: -s.m0125,
          borderRadius,
          ...resolveSquare(s.m0125),
          opacity: isNumber(value)
            ? 1
            : 0.28,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
      />
    </motion.button>
  );
};
