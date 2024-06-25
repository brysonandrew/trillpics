import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const useMidisOffset = () => {
  const { schedule } = useMusicRefs();
  const left = () => {
    const next = [
      ...schedule.record.steps.slice(1),
      schedule.record.steps[0],
    ];
    schedule.record.steps = next;
    schedule.record.sequence.offset =
      (schedule.record.sequence.offset -
        1) %
      SCALE_VALUE_COUNT;
  };
  const right = () => {
    const lastIndex =
      schedule.record.steps.length - 1;
    const last =
      schedule.record.steps[lastIndex];
    const next = [
      last,
      ...schedule.record.steps,
    ].slice(0, lastIndex + 1);
    schedule.record.steps = next;
    schedule.record.sequence.offset =
      (schedule.record.sequence.offset +
        1) %
      SCALE_VALUE_COUNT;
  };
  return { left, right };
};
