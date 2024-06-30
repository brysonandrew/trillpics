import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const Beats: FC = () => {
  const {
    audio: {
      gains: { beats },
    },
  } = useMusicRefs();

  const handleUpdate: TUpdateNumberHandler =
    (value) => {
      const next = value;
      beats.gain.value = next;
    };

  return (
    <InputsNumber
      name="beats.gain"
      title="gain"
      min={0}
      max={1}
      step={0.001}
      defaultValue={beats.gain.value}
      onUpdate={handleUpdate}
    />
  );
};
