import { FC, memo } from "react";
import { Waveform } from "~/remotion/player/playback/progress/waveform";
import { useCurrentPlayerFrame } from "~/remotion/hooks/use-current-player-frame";
import { TDurationInFramesProps } from "~/types/props";
import { Glow } from "~/components/decoration/glow";

type TProps = TDurationInFramesProps;
const _TimerCurrentProgress: FC<
  TProps
> = ({ durationInFrames }) => {
  const currentFrame =
    useCurrentPlayerFrame();
  const progress =
    currentFrame / durationInFrames;
  return (
    <div
      style={{
        width: `${progress * 100}%`,
      }}
      className="fill _radial-gradient pointer-events-none m-1"
    >
      <Glow classValue="fill" />
    </div>
  );
};
export const TimerCurrentProgress =
  memo(_TimerCurrentProgress);
