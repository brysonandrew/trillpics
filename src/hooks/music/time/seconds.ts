import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const useSeconds = (
) => {
  const { context, audio, recorder } =
    useMusicInitContext();
  const audioSeconds =
    useAudioSeconds();
  const videoSeconds =
    usePicVideoReadSeconds();
  return (
    (recorder.state === "recording"
      ? videoSeconds
      : audioSeconds)
  );
};
