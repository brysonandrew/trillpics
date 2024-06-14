export const resolveStepsPerSecond = (
  bpm: number
) => {
  const bps = bpm / 60; //beats per min
  const spb = 4; //steps per beat
  const sps = 1 / (bps * spb); // steps per second

  return sps;
};
