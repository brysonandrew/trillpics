import { useMemo } from "react";
import { motion } from "framer-motion";
import { TDivProps } from "@brysonandrew/config-types";
import { TBeatsStepsKey } from "~/hooks/music/beats/types";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveToMidiHoverKey } from "~/components/charts/grid/to-midi-hover-key";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isNull } from "~/utils/validation/is/null";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { TMusicKey } from "~/store/state/music/types";
import { midiValueToNumber } from "~/utils/music/midi";
import {
  TNodesStepsKey,
  TMidiValue,
} from "~/hooks/music/midis/types";
import { useStepPlay } from "~/components/charts/grid/step/play";
import { resolveStepRef } from "~/pages/video/music/_context/init/grid-cell/ref";
import { ChartsGridStepDot } from "~/components/charts/grid/step/dot";
import clsx from "clsx";
import { NOOP } from "@brysonandrew/utils-function";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { box } from "~uno/rules/box";
import { resolveTop } from "~/components/charts/grid/top";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { isString } from "~/utils/validation/is/string";
import { CHARTS_GRID_STEP_EMPTY_STYLE } from "~/pages/video/music/_context/init/grid-cell/constants";
import { useGridCellsStepRef } from "~/pages/video/music/_context/init/grid-cell/ref/hook";
import { ChartsGridPlayButton } from "~/components/charts/grid/step/play/button";

export type TChartsGridStepProps<
  T extends TMusicKey
> = Omit<TDivProps, "value"> & {
  musicKey: T;
  stepCount: number;
  columnIndex: number;
  rowIndex: number;
  value: TMidiValue;
  stepsKey: T extends "beats"
    ? TBeatsStepsKey
    : TNodesStepsKey;
};
export const ChartsGridStep = <
  T extends TMusicKey
>(
  props: TChartsGridStepProps<T>
) => {
  const {
    columnIndex,
    rowIndex,
    value,
    stepsKey,
    musicKey,
    style,
  } = props;
  const classes = useMemo(() => {
    return [
      "dark:bg-yellow bg-yellow1",
      "dark:bg-pink bg-teal shadow",
      "dark:bg-blue bg-pink1 shadow",
    ];
  }, []);
  const colorClass =
    classes[columnIndex % 3];
  const isSynth = stepsKey === "synth";

  const {
    playingKeys,
    synth,
    sequence,
  } = useTrillPicsStore(
    ({
      synth,
      playingKeys,
      sequence,
    }) => ({
      synth,
      playingKeys,
      sequence,
    })
  );

  const isDisabled =
    playingKeys.includes(musicKey);
  const displayMidiValue =
    (synth.midi ?? 0) +
    midiValueToNumber(value);

  const midi = isSynth
    ? displayMidiValue
    : value;

  const hoverKey =
    resolveToMidiHoverKey(
      midi,
      columnIndex,
      rowIndex
    );

  const { handlers, isHover } =
    useHoverKey();
  const stepRef =
    useGridCellsStepRef<T>({
      columnIndex,
      rowIndex,
      progressKey: musicKey,
    });
  const isHovering = isNull(hoverKey)
    ? false
    : isHover(hoverKey);

  const topStyle = {
    ...(isSynth
      ? {
          top:
            value === null
              ? 0
              : resolveTop(
                  value,
                  box.m05
                ),
        }
      : { top: 0 }),
  };

  const datasetValue =
    stepRef.gridCell?.dataset.midi;
  const nextValue =
    stepRef.isAlreadyDefined &&
    isString(datasetValue)
      ? datasetValue
          .split(",")
          .map((v) =>
            v === "null"
              ? null
              : Number(value)
          )
      : value;

  return (
    <div
      className="relative flex flex-col items-center grow"
      style={style}
    >
      {!isNull(hoverKey) && (
        <ChartsGridPlayButton
          classValue={colorClass}
          musicKey={musicKey}
          midi={midi}
          isHovering={isHovering}
          isDisabled={isDisabled}
          stepsKey={stepsKey}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          {...{
            ...(isNull(hoverKey)
              ? {}
              : handlers(hoverKey)),
            title: `play ${midi}`,
          }}
        />
      )}
      <div
        className={clsx(
          "fill pointer-events-none",
          colorClass
        )}
        {...(stepRef.isAlreadyDefined
          ? {}
          : { ref: stepRef.handler })}
        data-progress={
          value ? musicKey : null
        }
        style={{
          transitionProperty: "opacity",
          ...CHARTS_GRID_STEP_EMPTY_STYLE,
        }}
      />
      <div
        className="absolute flex flex-row justify-stretch items-center w-full"
        style={{
          ...topStyle,
        }}
      >
        {(Array.isArray(value)
          ? value
          : [value]
        ).map((value, index) => (
          <div
            key={`${index}`}
            className="row w-full"
          >
            <ChartsGridStepDot
              isHovering={isHovering}
              {...props}
              {...synth}
              {...sequence}
              value={nextValue}
            />

            {isSynth && (
              <div className="w-full bg-black-2 gap-1">
                {[
                  ...Array(
                    Math.ceil(
                      sequence.duration
                    )
                  ),
                ].map(
                  (
                    _,
                    index,
                    { length: count }
                  ) => (
                    <LinesHorizontal
                      key={`line-${index}`}
                      colorClass=""
                      style={{
                        width: `${
                          (index ===
                          count - 1
                            ? sequence.duration %
                              1
                            : Math.min(
                                1,
                                sequence.duration
                              )) * 100
                        }%`,
                        //
                        // box.m,
                        opacity:
                          value === null
                            ? 0.25
                            : 1,
                        ...topStyle,
                      }}
                    />
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
