import { FC } from "react";
import {
  TDivProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";
import { useVideoStyle } from "~/pages/video/style";
import { MusicControlsSlidersBpm } from "~/pages/video/music/controls/sliders/bpm";
import { MusicControlsSlidersMaster } from "~/pages/video/music/controls/sliders/master";

type TProps =
  TPropsWithChildren<TDivProps>;
export const MusicControlsSliders: FC<
  TProps
> = ({ style, ...props }) => {
  const { y, left } = useVideoStyle();
  
  return (
    <div
      className="fixed column z-20"
      style={{
        left: left - box.m2,
        top: y + box.m4 - box.m0125,
        gap: box.m,
        ...style,
      }}
      {...props}
    >
      <MusicControlsSlidersBpm />
      <MusicControlsSlidersMaster />
    </div>
  );
};
