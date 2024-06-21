import type { FC } from "react";
import { IconsSlash } from "~/components/icons/slash";
import { TimerDisplay } from "~/components/playback/timer/display";
import {
  TVideoMusicHeaderTimerProps,
  VideoMusicHeaderTimer,
} from "~/pages/video/music/header/timer";
import { box } from "~uno/rules/box";

type TProps =
  TVideoMusicHeaderTimerProps;
export const TimerDisplayHeader: FC<
  TProps
> = (props) => {
  const s = box;
  return (
    <div
      className="relative row-start"
      style={{
        gap: s.m0125,
        height: s.m05 ,
      }}
    >
      <VideoMusicHeaderTimer
        {...props}
      />
      <IconsSlash
        style={{
          top: s.m0625
        }}
      />
      <TimerDisplay
        elapsed={props.seconds}
        unit="seconds"
      />
    </div>
  );
};
