import { TPillBProps } from "~/components/buttons/pill/b";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsStop } from "~/components/icons/playback/stop";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";

type TConfig =
  | ReturnType<typeof usePlayMidis>
  | ReturnType<typeof usePlayBeats>;
export const useHeaderPlay = (
  audio: TConfig
): Pick<
  TPillBProps,
  "Icon" | "onClick" | "disabled"
> => {
  const { isRecording: isDisabled } =
    useContextMusicRecorder();
  return {
    Icon: audio.isPlaying
      ? IconsStop
      : IconsPlay,
    onClick: () => {
      if (isDisabled) return;
      if (audio.isPlaying) {
        audio.stop();
      } else {
        audio.play();
      }
    },
    disabled: isDisabled,
  } as const;
};
