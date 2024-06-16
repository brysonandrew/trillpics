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
import { resolveTop } from "~/components/charts/grid/top";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { TMusicKey } from "~/store/state/music/types";
import { useMusicLookup } from "~/hooks/music/lookup";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready";
import { COLOR_SHADE_RECORD } from "~uno/color";
import { resolveVarCss } from "@brysonandrew/color-base";

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
  const { context } =
    useMusicInitContext();

  const lookup = useMusicReadyContext();
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const borderRadius = boxRadius();
  const { gridCellsRecord } =
    useMusicInitContext();
  const progressKey = (
    isSynth ? "midis" : "beats"
  ) as TMusicKey;

  const key = `${columnIndex}-${rowIndex}-${progressKey}`;
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
      onClick={() => {
        if (isNull(midi)) return;
        const cell =
          gridCellsRecord[progressKey][
            rowIndex
          ][columnIndex];
        if (
          gridCellsRecord !== null &&
          cell?.style &&
          cell !== null
        ) {
          (
            gridCellsRecord[
              progressKey
            ][rowIndex][
              columnIndex
            ] as HTMLDivElement
          ).style.backgroundColor =
            resolveVarCss("blue");

          (
            (
              lookup[progressKey] as any
            )[stepsKey] as any
          ).play(
            context.currentTime,
            midi,
            {
              ...synth,
              duration: 1,
              onEnded: () => {
                (
                  gridCellsRecord[
                    progressKey
                  ][rowIndex][
                    columnIndex
                  ] as HTMLDivElement
                ).style.backgroundColor =
                  "white";
                console.log("end");

                (
                  (
                    lookup[
                      progressKey
                    ] as any
                  )[stepsKey] as any
                ).stop();
              },
            }
          );
        }
      }}
      key={`${columnIndex}`}
      className="center relative"
      style={{
        ...style,
        ...(isSynth
          ? {
              top: isNullValue
                ? 0
                : resolveTop(value),
            }
          : { top: 0 }),
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
          if (
            !gridCellsRecord[
              progressKey
            ]
          ) {
            gridCellsRecord[
              progressKey
            ] = [];
          }
          if (
            !gridCellsRecord[
              progressKey
            ][rowIndex]
          ) {
            gridCellsRecord[
              progressKey
            ][rowIndex] = [];
          }
          const gridCell =
            gridCellsRecord[
              progressKey
            ]?.[rowIndex]?.[
              columnIndex
            ];
          if (instance && !gridCell) {
            gridCellsRecord[
              progressKey
            ][rowIndex][columnIndex] =
              instance;
          }
        }}
        data-progress={progressKey}
        className={clsx("bg-white")}
        style={{
          position: "relative",
          top: -s.m0125,
          borderRadius,
          ...resolveSquare(s.m0125),
          scale: resolvePlayVolume(
            columnIndex
          ),
          opacity: isNumber(value)
            ? 1
            : isSynth
            ? 0
            : 0.28,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
      />
    </motion.button>
  );
};
