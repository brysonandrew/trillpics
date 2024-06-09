import { FC } from "react";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/playback/timer/current/animated-text";
import { useSoundContext } from "~/shell/global/sound";

type TProps = { timerKey: TTimerKey };
export const VideoMusicPlaybackTimerCurrentRow: FC<
  TProps
> = ({ timerKey }) => {
  const { saveProgress } =
    useSoundContext();
  const seconds =
    usePicVideoReadSeconds();
  const handleUpdate = (
    elapsedMs: number
  ) => {
    const progress = (elapsedMs/1000) / seconds;
    saveProgress.set(progress);
  };
  const text = useAnimatedText(
    handleUpdate
  );
  return (
    <>
      {text[timerKey].map(
        (v, index) => (
          <div
            key={`${index}`}
            className="text-center"
            style={{ width: 14 }}
            ref={(instance) => {
              if (instance && !v) {
                text[timerKey][index] =
                  instance;
              }
            }}
          />
        )
      )}
    </>
  );
};
