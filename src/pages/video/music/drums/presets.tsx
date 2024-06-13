import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const DrumsPresets: FC = () => {
  const { set, beatsPresetKey } =
    useTrillPicsStore(
      ({ set, beatsPresetKey }) => ({
        set,
        beatsPresetKey,
      })
    );
  return (
    <SelectStyled
      values={Object.keys(
        BEATS_PRESETS
      )}
      title="None"
      name="drums"
      value={beatsPresetKey}
      onValueChange={(
        key: TBeatsPresetsKey
      ) => {
        set((draft: TState) => {
          draft.beatsPresetKey = key;
        });
      }}
    />
  );
};
