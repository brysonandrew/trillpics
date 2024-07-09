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
          left - box._25 + box._01875,
        top: y + box._2 - box._025,
        gap: box._0125,
        ...style,
      }}
      {...props}
    >
      <MusicControlsInputsBpm />
      <MusicControlsInputsMaster />
    </div>
  );
};
