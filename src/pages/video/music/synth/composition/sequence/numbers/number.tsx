import { FC } from "react";
import {
  TSequenceOptions,
  TSequenceNumberOptionsKey,
} from "~/pages/video/music/synth/composition/sequence/types";
import { TInputProps } from "~/types/inputs";
import { InputsNumber } from "~/components/inputs/number";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useGridMidi } from "~/hooks/grid/midi";
import { useGridDrill } from "~/hooks/grid/drill";
const MIN = 0;
const MAX = 8;
const STEP = 0.1;
type TProps = TInputProps & {
  optionsKey: TSequenceNumberOptionsKey;
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
  children,
  ...props
}) => {
  const { schedule } = useMusicRefs();
  const handleNextSteps = useGridMidi();
  const handleGridCell = useGridDrill();
  const handleUpdate: TUpdateNumberHandler =
    (value) => {
      const partial: Partial<TSequenceOptions> =
        { [optionsKey]: value };
      schedule.record.sequence = {
        ...schedule.record.sequence,
        ...partial,
      };
      const config = {
        ...schedule.record.scale,
        ...schedule.record.sequence,
      };
      const nextSteps =
        resolveMidiSteps(config);
      handleNextSteps(nextSteps);
      schedule.record.steps = nextSteps;

      handleGridCell();
    };
  const name =
    `sequence.${optionsKey}` as const;
  return (
    <>
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
      {children}
    </>
  );
};
