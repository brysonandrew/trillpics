import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { Vertical } from "~/pages/video/music/controls/inputs/vertical";
import { useMusicRefs } from "~/pages/video/music/_context/init";
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
        style={{ width: box.m }}
      >
        {(props) => (
          <Vertical {...props} />
        )}
      </InputsNumber>
    );
  };
