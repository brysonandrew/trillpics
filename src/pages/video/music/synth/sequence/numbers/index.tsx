import type { FC } from "react";
import { SequenceNumber } from "~/pages/video/music/synth/sequence/numbers/number";
import { useTrillPicsStore } from "~/store/middleware";
export const MusicSequenceNumbers: FC =
  () => {
    const {
      sequence,
    } = useTrillPicsStore(
      ({
        sequence,
      }) => ({
        sequence,
      })
    );
    return (
      <>
        <SequenceNumber
          optionsKey="beats"
          title="Beats"
          step={1}
          max={32}
          defaultValue={sequence.beats}
        />
        <SequenceNumber
          optionsKey="interval"
          title="Interval"
          step={1}
          max={32}
          defaultValue={
            sequence.interval
          }
        />
        <SequenceNumber
          optionsKey="duration"
          title="Duration"
          step={0.1}
          max={1}
          defaultValue={
            sequence.duration
          }
        />
        <SequenceNumber
          optionsKey="repeat"
          title="Repeat"
          step={0.2}
          defaultValue={sequence.repeat}
        />
      </>
    );
  };
