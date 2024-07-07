import { useMemo } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TBeatsStepsKey } from "~/hooks/music/beats/types";
import { useTrillPicsStore } from "~/store/middleware";
import { encryptMidiHoverKey } from "~/components/charts/grid/to-midi-hover-key";
import { isNull } from "~/utils/validation/is/null";
import { TMusicKey } from "~/store/state/music/types";
import { midiValueToNumber } from "~/utils/music/midi";
import {
  TMidisStepsKey,
  TMidiValue,
} from "~/hooks/music/midis/types";
import { ChartsGridStepDot } from "~/components/charts/grid/step/dot";
import clsx from "clsx";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { box } from "~uno/rules/box";
import { resolveTop } from "~/components/charts/grid/top";
import { CHARTS_GRID_STEP_EMPTY_STYLE } from "~/pages/video/music/_context/refs/grid/constants";
import { useGridsStepRef } from "~/hooks/grid/hook";
import { ChartsGridPlayButton } from "~/components/charts/grid/step/play/button";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export type CStepsKey<
  T extends TMusicKey
> = T extends "beats"
  ? TBeatsStepsKey
  : T extends "midis"
  ? TMidisStepsKey
  : never;
export type TChartsGridStepProps<
  T extends TMusicKey
> = Omit<TDivProps, "value"> & {
  musicKey: T;
  stepCount: number;
  columnIndex: number;
  rowIndex: number;
  value: TMidiValue;
  stepsKey: CStepsKey<T>;
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
  const { schedule} =
    useMusicRefs();
  const {
    playingKeys,
    // synth,
    // sequence,
    isHover,
  } = useTrillPicsStore(
    ({
      // synth,
      playingKeys,
      // sequence,
      isHover,
    }) => ({
      // synth,
      playingKeys,
      // sequence,
      isHover,
    })
  );

  const stepRef =
    useGridsStepRef<T>({
      columnIndex,
      rowIndex,
      progressKey: musicKey,
    });

  const isDisabled =
    playingKeys.includes(musicKey);
  const displayMidiValue =
    (schedule.record.synth.midi ?? 0) +
    midiValueToNumber(value);

  const midi = isSynth
    ? displayMidiValue
    : value;

  const hoverKey = encryptMidiHoverKey(
    midi,
    columnIndex,
    rowIndex
  );

  const staffHoverKey =
    encryptMidiHoverKey(
      midi,
      -1,
      rowIndex
    );

  const isSideHovering =
    musicKey === "midis" ||
    isNull(staffHoverKey)
      ? false
      : isHover(staffHoverKey);
  const isHovering =
    isSideHovering || isNull(hoverKey)
      ? false
      : isHover(hoverKey);

  const topStyle = {
    ...(isSynth
      ? {
          top: resolveTop(
            value,
            box._05
          ),
        }
      : { top: 0 }),
  };

  // const nextValue = resolveGridCellMidi(
  //   stepRef,
  //   value
  // );

  return (
    <div
      className="relative flex flex-col items-center grow"
      style={style}
    >
      <div
        className={clsx(
          "absolute pointer-events-none",
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
          ...topStyle,
        }}
      >
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
                {...schedule.record.sequence}
                value={value}
              />

              {isSynth && (
                <div className="w-full bg-black-2 gap-1">
                  {[
                    ...Array(
                      Math.ceil(
                        schedule.record.sequence.duration
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
                              ? schedule.record.sequence.duration %
                                1
                              : Math.min(
                                  1,
                                  schedule.record.sequence.duration
                                )) * 100
                          }%`,
                          opacity:
                            value ===
                            null
                              ? 0.25
                              : 1,
                          // ...topStyle,
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
      {!isNull(hoverKey) && (
        <ChartsGridPlayButton
          classValue={colorClass}
          musicKey={musicKey}
          midi={midi}
          isDisabled={isDisabled}
          stepsKey={stepsKey}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          title={`play ${midi}`}
          hoverKey={hoverKey}
        />
      )}
    </div>
  );
};
