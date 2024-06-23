import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { useNodesPattern } from "~/hooks/music/midis/scale/pattern";
import { SCALE_PATTERNS } from "~/pages/video/music/synth/scale/constants";

export const MusicScalePattern: FC =
  () => {
    const { value, update } =
      useNodesPattern();
    return (
    
      <SelectStyled
        name="melody.scale.pattern"
        title="pattern"
        placeholder="melody patterns"
        value={value}
        values={SCALE_PATTERNS}
        onValueChange={update}
      />
    );
  };
