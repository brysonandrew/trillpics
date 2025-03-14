import type { FC } from "react";
import { IconsSlash } from "~/components/icons/slash";
import { TimerDisplay } from "~/components/playback/timer/display";
import { box } from "~uno/rules/box";

type TProps =
  any;
export const TimerDisplayHeader: FC<
  TProps
> = (props) => {
  return (
    <div
      className="relative row-start"
      style={{
        gap: box._0125,
        height: box._05 ,
      }}
    >
      {/* <VideoMusicHeaderTimer
        {...props}
      /> */}
      <IconsSlash
        style={{
          top: box._00625
        }}
      />
      <TimerDisplay
        elapsed={props.seconds}
        unit="seconds"
      />
    </div>
  );
};
