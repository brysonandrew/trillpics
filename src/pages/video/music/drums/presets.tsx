import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const DrumsPresets: FC = () => {
  const { set, beats } =
    useTrillPicsStore(
      ({ set, beats }) => ({
        set,
        beats,
      })
    );
  const values = Object.keys(
    BEATS_PRESETS
  );
  return (
    <SelectStyled
      values={values}
      title="preset"
      name="drums"
      placeholder="presets"
      value={beats.presetKey}
      onValueChange={(
        key: TBeatsPresetsKey
      ) => {
        set((draft: TState) => {
          draft.beats.presetKey = key;
        });
      }}
    />
  );
};
