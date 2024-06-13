export const resolveStepsPerSecond = (
  bpm: number
) => {
  const bps = bpm / 60; //beats per min
  const spb = 4; //steps per beat
  const sps = bps / spb; // steps per second

  return sps;
};
// const stepDuration =
// 1 / (4 * (bpm / 60));
// const seconds =
// stepDuration * STEPS_COUNT * 2;