import { FC } from "react";
import {
  TSequenceOptions,
  TSequenceSliderOptionsKey,
} from "~/pages/video/music/synth/sequence/types";
import { TInputProps } from "~/types/inputs";
import { InputsNumber } from "~/components/inputs/number";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useGridCellMidi } from "~/pages/video/music/_context/init/grid-cell/midi";
import { useGridCellDrill } from "~/pages/video/music/_context/init/grid-cell/drill";
import { resolveMidiNumber } from "~/utils/midi";
const MIN = 0;
const MAX = 8;
const STEP = 0.1;
type TProps = TInputProps & {
  optionsKey: TSequenceSliderOptionsKey;
  min?: number;
  max?: number;
  step?: number;
};
export const SequenceNumber: FC<
  TProps
> = ({
  optionsKey,
  min = MIN,
  max = MAX,
  step = STEP,
  title,
  defaultValue,
  ...props
}) => {
  const { stepsRecord } =
    useContextMusicInit();
  const handleNextSteps =
    useGridCellMidi();
  const handleGridCell =
    useGridCellDrill();
  const handleUpdate: TUpdateNumberHandler =
    (value) => {
      const partial: Partial<TSequenceOptions> =
        { [optionsKey]: value };
      stepsRecord.sequence = {
        ...stepsRecord.sequence,
        ...partial,
      };
      const config = {
        ...stepsRecord.scale,
        ...stepsRecord.sequence,
      };
      const nextSteps =
        resolveMidiSteps(config);
      console.log(stepsRecord.steps);
      handleNextSteps(nextSteps);
      stepsRecord.steps = nextSteps;

      // handleGridCell();
    };
  const name =
    `sequence.${optionsKey}` as const;
  return (
    <InputsNumber
      name={name}
      title={title ?? name}
      defaultValue={
        Array.isArray(defaultValue)
          ? defaultValue[0]
          : defaultValue
      }
      min={min}
      max={max}
      step={step}
      onUpdate={handleUpdate}
      {...props}
    />
  );
};
