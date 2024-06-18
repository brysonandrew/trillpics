import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const DrumsGain: FC = () => {
  const { drums, set } =
    useTrillPicsStore(
      ({ drums, set }) => ({
        drums,
        set,
      })
    );
  return (
    <div>
      <UiInputsSliderRow
        name="drums.gain"
        title="gain"
        value={drums.gain}
        min={0}
        max={8}
        step={0.4}
        onUpdate={(
          _: string,
          value: number | string
        ) =>
          set((draft: TState) => ({
            drums: {
              ...draft.drums,
              gain: value,
            },
          }))
        }
      />
    </div>
  );
};
