import type { FC } from "react";
import { IconsSlash } from "~/components/icons/slash";
import { TimerDisplay } from "~/components/playback/timer/display";
import {
  TVideoMusicHeaderTimerProps,
  VideoMusicHeaderTimer,
} from "~/pages/video/music/layout/header/timer";
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
        gap: box.m0125,
        height: box.m05 ,
      }}
    >
      <VideoMusicHeaderTimer
        {...props}
      />
      <IconsSlash
        style={{
          top: box.m00625
        }}
      />
      <TimerDisplay
        elapsed={props.seconds}
        unit="seconds"
      />
    </div>
  );
};
