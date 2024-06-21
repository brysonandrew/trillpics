import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { useUpdateStateHandler } from "~/store/hooks/use-update-state-handler";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { isNumber } from "~/utils/validation/is/number";
const MIN = 0;
const MAX = 8;
export const SequenceRepeat: FC =
  () => {
    const set = useUpdateStateHandler();
    const { sequence, scale } =
      useTrillPicsStore(
        ({ sequence, scale }) => ({
          sequence,
          scale,
        })
      );
    const handleUpdate: TUpdateSliderHandler =
      (value) => {
        if (isNumber(value)) {
          const nextValue = value;
          set((draft: TState) => {
            draft.sequence.repeat =
              nextValue;
            draft.steps =
              resolveMidiSteps({
                ...sequence,
                ...scale,
                repeat: nextValue,
              });
          });
        }
      };

    return (
      <UiInputsSliderRow
        name="sequence.repeat"
        title="repeat"
        min={MIN}
        max={MAX}
        step={0.1}
        onUpdate={handleUpdate}
      />
    );
  };
