import {
  FC,
  Fragment,
  useMemo,
} from "react";
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
  TMidisStepsKey,
  TMidiValue,
} from "~/hooks/music/midis/types";
import { useStepPlay } from "~/components/charts/grid/step/play";
import { resolveStepRef } from "~/components/charts/grid/step/ref";
import { ChartsGridStepDot } from "~/components/charts/grid/step/dot";
import clsx from "clsx";
import { NOOP } from "@brysonandrew/utils-function";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { boxSize } from "~uno/rules/box/size";
import { resolveTop } from "~/components/charts/grid/top";
export const CHARTS_GRID_STEP_EMPTY_STYLE =
  {
    transitionDuration: "1s",
    opacity: "0",
  } as const;
export const CHARTS_GRID_STEP_ACTIVE_STYLE =
  {
    transitionDuration: "0s",
    opacity: "0.4",
  } as const;

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
    : TMidisStepsKey;
};
export const ChartsGridStep = <
  T extends TMusicKey
>(
  _props: TChartsGridStepProps<T>
) => {
  const {
    columnIndex,
    rowIndex,
    value,
    stepsKey,
    musicKey,
    style,
  } = _props;

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
  const s = boxSize();

  const {
    synth,
    playingKeys,
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
  const handlePlay = useStepPlay(
    midi,
    _props
  );
  const ref = resolveStepRef(
    musicKey,
    _props
  );
  const isHovering = isNull(hoverKey)
    ? false
    : isHover(hoverKey);

  const isDisabled =
    playingKeys.includes(musicKey);

  const topStyle = {
    ...(isSynth
      ? {
          top:
            value === null
              ? 0
              : resolveTop(
                  value,
                  s.m05
                ),
        }
      : { top: 0 }),
  };

  return (
    <div
      className="relative flex flex-col items-center grow"
      style={style}
    >
      <button
        className="fill bg-black"
        onClick={
          isDisabled ? NOOP : handlePlay
        }
        disabled={isDisabled}
        style={{
          opacity:
            resolvePlayVolume(
              columnIndex
            ) / 8,
        }}
        {...(isNull(hoverKey) ||
        isDisabled
          ? {}
          : handlers(hoverKey))}
      />
      <div
        className={clsx(
          "fill pointer-events-none",
          colorClass
        )}
        ref={ref}
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
              {..._props}
              {...synth}
              {...sequence}
              value={value}
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
                        // s.m,
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
