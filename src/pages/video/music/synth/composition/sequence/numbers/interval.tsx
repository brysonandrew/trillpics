import type { FC } from "react";
import { SequenceNumber } from "~/pages/video/music/synth/composition/sequence/numbers/number";
import { useMusicRefs } from "~/pages/video/music/_context/init";
const LIST_ID =
  "sequence-number-interval";

export const SequenceNumberInterval: FC =
  () => {
    const { schedule } = useMusicRefs();

    return (
      <>
        <datalist id={LIST_ID}>
          <option value="1"></option>
          <option value="2"></option>
          <option value="4"></option>
          <option value="8"></option>
        </datalist>
        <SequenceNumber
          optionsKey="interval"
          title="Interval"
          step={1}
          max={8}
          defaultValue={
            schedule.record.sequence
              .interval
          }
        />
      </>
    );
  };
