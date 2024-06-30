import type { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import {
  TSynthModeKey,
  SYNTH_MODES,
} from "~/pages/video/music/synth/mode/constants";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const SynthMode: FC = () => {
  const { schedule } = useMusicRefs();
  const handleValueChange = (
    key: TSynthModeKey
  ) => {
    schedule.record.synth.mode = key;
  };
  return (
    <InputsSelect
      values={SYNTH_MODES}
      title="mode"
      name="synth.mode"
      placeholder="mode"
      defaultValue={
        schedule.record.synth.mode
      }
      onValueChange={handleValueChange}
    />
  );
};
