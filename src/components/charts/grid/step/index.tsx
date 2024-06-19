import { FC, useMemo } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TBeatsStepsKey } from "~/hooks/music/beats/types";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveToMidiHoverKey } from "~/components/charts/grid/to-midi-hover-key";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isNull } from "~/utils/validation/is/null";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { TMusicKey } from "~/store/state/music/types";
import { midiValueToNumber } from "~/utils/music/midi";
import { TMidiValue } from "~/hooks/music/midis/types";
import { useStepPlay } from "~/components/charts/grid/step/play";
import { resolveStepRef } from "~/components/charts/grid/step/ref";
import { ChartsGridStepDot } from "~/components/charts/grid/step/dot";
import { useSecondsPerStep } from "~/hooks/music/time/seconds-per-step";
import clsx from "clsx";
import { NOOP } from "@brysonandrew/utils-function";
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

export type TChartsGridStepProps = Omit<
  TDivProps,
  "value"
> & {
  stepCount: number;
  columnIndex: number;
  rowIndex: number;
  value: TMidiValue;
  stepsKey: TBeatsStepsKey | "synth";
};
export const ChartsGridStep: FC<
  TChartsGridStepProps
> = (_props) => {
  const {
    columnIndex,
    rowIndex,
    value,
    stepsKey,
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

  const { synth, playingKeys } =
    useTrillPicsStore(
      ({ synth, playingKeys }) => ({
        synth,
        playingKeys,
      })
    );
  const displayMidiValue =
    (synth.midi ?? 0) +
    midiValueToNumber(value);

  const midi = isSynth
    ? displayMidiValue
    : value;

  const progressKey = (
    isSynth ? "midis" : "beats"
  ) as TMusicKey;
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
    progressKey,
    _props
  );
  const isHovering = isNull(hoverKey)
    ? false
    : isHover(hoverKey);

  const isDisabled =
    playingKeys.includes(progressKey);

  return (
    <div className="relative flex flex-col items-center grow">
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
          value ? progressKey : null
        }
        style={{
          transitionProperty: "opacity",
          ...CHARTS_GRID_STEP_EMPTY_STYLE,
        }}
      />
      <ChartsGridStepDot
        isHovering={isHovering}
        {..._props}
      />
    </div>
  );
};
