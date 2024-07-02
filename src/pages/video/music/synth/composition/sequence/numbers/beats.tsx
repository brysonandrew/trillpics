import type { FC } from "react";
import { SequenceNumber } from "~/pages/video/music/synth/composition/sequence/numbers/number";
import { useMusicRefs } from "~/pages/video/music/_context/init";
const LIST_ID = "sequence-number-beats";
export const SequenceNumberBeats: FC =
  () => {
    const { schedule } = useMusicRefs();
    return (
      <>
        <datalist id={LIST_ID}>
          <option value="1"></option>
          <option value="2"></option>
          <option value="4"></option>
          <option value="8"></option>
          <option value="16"></option>
          <option value="32"></option>
          <option value="64"></option>

        </datalist>
        <SequenceNumber
          optionsKey="beats"
          title="Beats"
          step={1}
          max={32}
          list={LIST_ID}
          defaultValue={
            schedule.record.sequence
              .beats
          }
        />
      </>
    );
  };
