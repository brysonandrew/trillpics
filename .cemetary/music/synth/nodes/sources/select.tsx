import type { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { SYNTH_SOURCES } from "~/pages/video/music/synth/nodes/sources/constants";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const SynthSourcesSelect: FC<{onUpdate(value:string): void}> = ({onUpdate}) => {
  const { schedule } = useMusicRefs();

  return (
    <InputsSelect
      values={SYNTH_SOURCES}
      title="source"
      name="synth.source"
      placeholder="type"
      defaultValue={
        schedule.record.synth.source
      }
      onValueChange={onUpdate}
    />
  );
};
