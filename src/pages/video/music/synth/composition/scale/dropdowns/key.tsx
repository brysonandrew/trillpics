import type { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { SCALES } from "~/constants/scales";
import { useNodesScale } from "~/hooks/scale";
import { isScaleKey } from "~/pages/video/music/synth/composition/scale/validators";

export const MusicScaleKey: FC = () => {
  const { key, update } =
    useNodesScale();
  return (
    <InputsSelect
      name="key"
      title="scale"
      defaultValue={key}
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
