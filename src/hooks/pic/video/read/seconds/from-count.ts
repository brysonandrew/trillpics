export const MIN_VIDEO_SECONDS = 8;
export const resolveSecondsFromCount = (
  count: number,
  bpm: number
) => {
  if (count === 0) return 0;
  const bps = bpm / 60 / count;
  let seconds = 0;
  while (seconds < MIN_VIDEO_SECONDS) {
    seconds += bps;
  }
  return seconds;
};
