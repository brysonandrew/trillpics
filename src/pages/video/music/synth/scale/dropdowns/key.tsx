import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { SCALES } from "~/constants/scales";
import { useNodesScale } from "~/hooks/music/midis/scale";
import { isScaleKey } from "~/pages/video/music/synth/scale/validators";

export const MusicScaleKey: FC = () => {
  const { key, update } =
    useNodesScale();
  return (
    <SelectStyled
      name="key"
      title="key"
      value={key}
      values={SCALES}
      placeholder="scale"
      onValueChange={(value) => {
        if (isScaleKey(value)) {
          update(value);
        }
      }}
    />
  );
};
