import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { useMidiSteps } from "~/constants/music/midi/steps/hook";
import { useUpdateStateHandler } from "~/store/hooks/use-update-state-handler";
import { TState } from "~/store/types";
import { isNumber } from "~/utils/validation/is/number";
const MIN = 0;
const MAX = 32;

export const SequenceBeats: FC = () => {
  const set = useUpdateStateHandler();
  const resolveMidiSteps =
    useMidiSteps();
  const handleUpdate: TUpdateSliderHandler =
    (value) => {
      if (isNumber(value)) {
        set((draft: TState) => {
          draft.sequence.beats = value;
          draft.steps =
            resolveMidiSteps({
              beats: value,
            });
        });
      }
    };

  return (
    <UiInputsSliderRow
      name="sequence.beats"
      title="beats"
      min={MIN}
      max={MAX}
      step={1}
      onUpdate={handleUpdate}
    />
  );
};
