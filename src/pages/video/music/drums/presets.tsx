import type { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const DrumsPresets: FC = () => {
  const { schedule } = useMusicRefs();
  const {
    record: {
      preset,
      presetKey,
      presets,
    },
  } = schedule;
  const values = Object.keys(
    BEATS_PRESETS
  );
  const handleValueChange = (
    key: TBeatsPresetsKey
  ) => {
    schedule.record.presetKey = key;
  };
  return (
    <InputsSelect
      values={values}
      title="preset"
      name="drums"
      placeholder="presets"
      defaultValue={presetKey}
      onValueChange={handleValueChange}
    />
  );
};
