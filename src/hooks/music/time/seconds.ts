import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const useSeconds = () => {
  const {
    audio: { save:{recorder} },
  } = useMusicRefs();
  const audioSeconds =
    useAudioSeconds();
  const videoSeconds =
    usePicVideoReadSeconds();
  return recorder.state === "recording"
    ? videoSeconds
    : audioSeconds;
};
