import type { FC } from "react";
import {
  TUpdateSliderHandler,
  SliderControlled,
} from "~/components/inputs/slider/controlled";
import { useUpdateStateHandler } from "~/store/hooks/use-update-state-handler";
import { TState } from "~/store/types";
import { isNumber } from "~/utils/validation/is/number";
const MIN = 0;
const MAX = 2;

export const SequenceDuration: FC =
  () => {
    const set = useUpdateStateHandler();
    const handleUpdate: TUpdateSliderHandler =
      (value) => {
        if (isNumber(value)) {
          const nextValue = value;
          set((draft: TState) => {
            draft.sequence.duration =
              nextValue;
          });
        }
      };

    return (
      <SliderControlled
        name="sequence.duration"
        title="duration"
        min={MIN}
        max={MAX}
        step={0.01}
        onUpdate={handleUpdate}
      />
    );
  };
