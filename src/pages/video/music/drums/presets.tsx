import type { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const DrumsPresets: FC = () => {
  // const { set, beats } =
  //   useTrillPicsStore(
  //     ({ set, beats }) => ({
  //       set,
  //       beats,
  //     })
  //   );
  const values = Object.keys(
    BEATS_PRESETS
  );
  return (
    <InputsSelect
      values={values}
      title="preset"
      name="drums"
      placeholder="presets"
      // value={beats.presetKey}
      onValueChange={(
        key: TBeatsPresetsKey
      ) => {
        // set((draft: TState) => {
        //   draft.beats.presetKey = key;
        // });
      }}
    />
  );
};
