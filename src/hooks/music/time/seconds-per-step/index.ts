import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";

export const useSecondsPerStep = (
  count: number
) => {
  const audioSeconds =
    useAudioSeconds();
  return audioSeconds / count;
};
