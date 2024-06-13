import { FC } from "react";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/record/timer/current/animated-text";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

type TProps = { timerKey: TTimerKey,seconds:number };
export const VideoMusicPlaybackTimerCurrentRow: FC<
  TProps
> = ({ timerKey,seconds }) => {
  const { saveProgress } =
    useMusicInitContext();

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
