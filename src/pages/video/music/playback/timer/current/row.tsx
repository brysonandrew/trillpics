import { FC } from "react";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/playback/timer/current/animated-text";

type TProps = { timerKey: TTimerKey };
export const VideoMusicPlaybackTimerCurrentRow: FC<
  TProps
> = ({ timerKey }) => {
  const text = useAnimatedText();
  return (
    <>
      {text[timerKey].map(
        (v, index) => (
          <div
            key={`${index}`}
            className="text-center"
            style={{ width: 16 }}
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
