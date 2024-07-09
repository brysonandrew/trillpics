import type { FC } from "react";
import { SequenceNumberBeats } from "~/pages/video/music/synth/composition/sequence/numbers/beats";
import { SequenceNumberInterval } from "~/pages/video/music/synth/composition/sequence/numbers/interval";
import { SequenceNumber } from "~/pages/video/music/synth/composition/sequence/numbers/number";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
export const MusicSequenceNumbers: FC =
  () => {
    const { schedule } = useMusicRefs();
    return (
      <>
        <SequenceNumberBeats />
        <SequenceNumberInterval />
        <SequenceNumber
          optionsKey="duration"
          title="Duration"
          step={0.1}
          max={1}
          defaultValue={
            schedule.record.sequence
              .duration
          }
        />
        <SequenceNumber
          optionsKey="repeat"
          title="Repeat"
          step={0.2}
          defaultValue={
            schedule.record.sequence
              .repeat
          }
        />
      </>
    );
  };
