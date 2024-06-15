import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { SCALES } from "~/constants/scales";
import { useMidisScale } from "~/hooks/music/midis/scale";
import { isScaleKey } from "~/pages/video/music/synth/validators";

export const SynthScaleKey: FC = () => {
  const { key, update, rescale } =
    useMidisScale();
  return (
    <SelectStyled
      name="key"
      title="key"
      value={key}
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
