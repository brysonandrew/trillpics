const MIN_SECONDS = 4;
export const resolveSecondsFromCount = (count:number,bpm:number) => {
  const bps = bpm/60/count;
  let seconds = 0;
  while (seconds < MIN_SECONDS) {
    seconds+=bps;
  }
  return seconds
}