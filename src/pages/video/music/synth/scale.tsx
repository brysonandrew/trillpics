import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { SCALES } from "~/constants/scales";
import { useMusicMidisPatternsScale } from "~/hooks/music/midis/patterns/scale";
import { isScaleKey } from "~/pages/video/music/synth/validators";

export const SynthScale: FC = () => {
  const { scaleKey, update, rescale } =
    useMusicMidisPatternsScale();
  return (
    <SelectStyled
      name="scaleKey"
      title="scaleKey"
      value={scaleKey}
      values={SCALES}
      onValueChange={(value) => {
        if (isScaleKey(value)) {
          update(value);
          rescale();
        }
      }}
    />
  );
};
