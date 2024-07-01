import type { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { useNodesPattern } from "~/hooks/music/midis/scale/pattern";
import { SCALE_PATTERNS } from "~/pages/video/music/synth/composition/scale/constants";

export const MusicScalePattern: FC =
  () => {
    const { value, update } =
      useNodesPattern();
    return (
    
      <InputsSelect
        name="melody.scale.pattern"
        title="pattern"
        placeholder="melody patterns"
        defaultValue={value}
        values={SCALE_PATTERNS}
        onValueChange={update}
      />
    );
  };
