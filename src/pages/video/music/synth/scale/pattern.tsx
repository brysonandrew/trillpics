import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { useMidisPattern } from "~/hooks/music/midis/pattern";
import { useTrillPicsStore } from "~/store/middleware";
import { SCALE_PATTERNS } from "~/store/state/music/constants";
import { TScalePattern } from "~/store/state/music/types";

export const SynthScalePattern: FC =
  () => {
    const { synth } =
      useTrillPicsStore(
        ({ synth }) => ({
          synth,
        })
      );
    const handleUpdate =
      useMidisPattern();
    return (
      <SelectStyled
        name="melody.scale.pattern"
        title="pattern"
        value={synth.melody.scale.pattern}
        values={SCALE_PATTERNS}
        onValueChange={(
          value: TScalePattern
        ) => handleUpdate(value)}
      />
    );
  };
