import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { SequenceNumber } from "~/pages/video/music/synth/composition/sequence/numbers/number";
import { useMusicRefs } from "~/pages/video/music/_context/init";
export const MusicSequenceNumbers: FC =
  () => {
    const { schedule } = useMusicRefs();
    const { sequence, bpm } =
      schedule.record;
    // const {
    //   sequence,
    // } = useTrillPicsStore(
    //   ({
    //     sequence,
    //   }) => ({
    //     sequence,
    //   })
    // );
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
          max={8}
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
        <InputsNumber
          name="schedule.record.bpm"
          onUpdate={(value: number) => {
            schedule.record.bpm = value;
          }}
          title="BPM"
          step={1}
          min={40}
          max={180}
          defaultValue={bpm}
        />
      </>
    );
  };
