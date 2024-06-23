import { FC } from "react";
import {
  TDivProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";
import { useVideoStyle } from "~/pages/video/style";
import { MusicControlsButtonsLoop } from "~/pages/video/music/controls/buttons/loop";
import { MusicControlsButtonsPlay } from "~/pages/video/music/controls/buttons/play";

type TProps =
  TPropsWithChildren<TDivProps>;
export const MusicControlsButtons: FC<
  TProps
> = ({ style, ...props }) => {
  const { y, left } = useVideoStyle();

  return (
    <div
      className="fixed column z-20"
      style={{
        left: left - box.m2,
        top: y + box.m4 - box.m0125,
        gap: box.m075,
        ...style,
      }}
      {...props}
    >
      <MusicControlsButtonsPlay />
      <MusicControlsButtonsLoop />
    </div>
  );
};
