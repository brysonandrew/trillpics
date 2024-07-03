import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { InputsNumberDefault } from "~/components/inputs/number/default";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { box } from "~uno/rules/box";

export const MusicControlsInputsMaster: FC =
  () => {
    const { audio } = useMusicRefs();

    return (
      <InputsNumber
        name="audio.gains.master.gain.value"
        onUpdate={(value: number) => {
          audio.gains.master.gain.value =
            value;
        }}
        title="Master"
        step={0.0001}
        min={0}
        max={6}
        defaultValue={
          audio.gains.master.gain.value
        }
      >
        {(props) => (
          <InputsNumberDefault
            {...props}
          />
        )}
      </InputsNumber>
    );
  };
