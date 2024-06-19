import { STEPS_COUNT } from "~/constants/music/timing";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";

export const useSecondsPerStep = (
  count = STEPS_COUNT
) => {
  const audioSeconds =
    useAudioSeconds();
  return audioSeconds / count;
};
