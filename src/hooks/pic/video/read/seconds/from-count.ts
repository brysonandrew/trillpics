export const MIN_VIDEO_SECONDS = 2;
export const resolveSecondsFromCount = (
  count: number,
  bpm: number
) => {
  const bps = bpm / 60 / count;
  let seconds = 0;
  while (seconds < MIN_VIDEO_SECONDS) {
    seconds += bps;
  }
  return seconds;
};
