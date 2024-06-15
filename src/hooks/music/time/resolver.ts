import { STEPS_COUNT } from "~/constants/music/steps";

export const resolveStepsPerSecond = (
  bpm: number,
  count = STEPS_COUNT
) => {
  const bps = bpm / 60; //beats per min
  const spb = 4; //steps per beat
  const sps = 1 / (bps * (count / spb)); // steps per second

  return sps;
};
