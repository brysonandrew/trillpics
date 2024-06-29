import type { FC } from "react";
import {
  SliderControlled,
} from "~/components/inputs/slider/controlled";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { TSequenceSliderOptionsKey } from "~/pages/video/music/synth/composition/sequence/types";
import { useUpdateStateHandler } from "~/store/hooks/use-update-state-handler";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { isNumber } from "~/utils/validation/is/number";
const MIN = 0;
const MAX = 8;
const STEP = 0.1;
type TProps = {
  optionsKey: TSequenceSliderOptionsKey;
  min?: number;
  max?: number;
  step?: number;
};
export const SequenceSlider: FC<
  TProps
> = ({
  optionsKey,
  min = MIN,
  max = MAX,
  step = STEP,
}) => {
  const set = useUpdateStateHandler();
  // const { sequence, scale } =
  //   useTrillPicsStore(
  //     ({ sequence, scale }) => ({
  //       sequence,
  //       scale,
  //     })
  //   );
  const handleUpdate: TUpdateNumberHandler =
    (value:number) => {
      if (isNumber(value)) {
        const nextValue = value;
        // set((draft: TState) => {
        //   draft.sequence[optionsKey] =
        //     nextValue;
        //   draft.steps =
        //     resolveMidiSteps({
        //       ...sequence,
        //       ...scale,
        //       [optionsKey]: nextValue,
        //     });
        // });
      }
    };
  const name =
    `sequence.${optionsKey}` as const;
  return (
    <SliderUncontrolled
      // name={name}
      title={optionsKey}
      min={min}
      max={max}
      step={step}
      onUpdate={handleUpdate}
    />
  );
};
