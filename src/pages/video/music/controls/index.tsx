import { FC } from "react";
import {
  TDivProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";
import { useVideoStyle } from "~/pages/video/style";
import { MusicControlsInputsBpm } from "~/pages/video/music/controls/inputs/bpm";
import { MusicControlsInputsMaster } from "~/pages/video/music/controls/inputs/master";

type TProps =
  TPropsWithChildren<TDivProps>;
export const MusicControls: FC<
  TProps
> = ({ style, ...props }) => {
  const { y, left } = useVideoStyle();

  return (
    <div
      className="fixed column z-20"
      style={{
        left:
          left - box.m25 + box.m01875,
        top: y + box.m2 - box.m025,
        gap: box.m0125,
        ...style,
      }}
      {...props}
    >
      <MusicControlsInputsBpm />
      <MusicControlsInputsMaster />
    </div>
  );
};
