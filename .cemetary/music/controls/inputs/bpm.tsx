import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { InputsNumberDefault } from "~/components/inputs/number/default";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { box } from "~uno/rules/box";

export const MusicControlsInputsBpm: FC =
  () => {
    const { schedule } = useMusicRefs();

    return (
      <InputsNumber
        name="schedule.record.bpm"
        onUpdate={(value: number) => {
          schedule.record.bpm = value;
        }}
        title="BPM"
        step={1}
        min={40}
        max={180}
        defaultValue={
          schedule.record.bpm
        }
        style={{ width: box._ }}
      >
        {(props) => (
          <InputsNumberDefault
            {...props}
          />
        )}
      </InputsNumber>
    );
  };
