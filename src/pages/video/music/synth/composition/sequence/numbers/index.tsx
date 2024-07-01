import type { FC } from "react";
import { SequenceNumber } from "~/pages/video/music/synth/composition/sequence/numbers/number";
import { useMusicRefs } from "~/pages/video/music/_context/init";
export const MusicSequenceNumbers: FC =
  () => {
    const { schedule } = useMusicRefs();
    return (
      <>
        <SequenceNumber
          optionsKey="beats"
          title="Beats"
          step={1}
          max={32}
          defaultValue={schedule.record.sequence.beats}
        />
        <SequenceNumber
          optionsKey="interval"
          title="Interval"
          step={1}
          max={8}
          defaultValue={
            schedule.record.sequence.interval
          }
        />
        <SequenceNumber
          optionsKey="duration"
          title="Duration"
          step={0.1}
          max={1}
          defaultValue={
            schedule.record.sequence.duration
          }
        />
        <SequenceNumber
          optionsKey="repeat"
          title="Repeat"
          step={0.2}
          defaultValue={schedule.record.sequence.repeat}
        />
      </>
    );
  };
