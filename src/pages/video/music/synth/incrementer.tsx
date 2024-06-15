import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TUpdateSliderHandler } from "~/components/inputs/slider/row";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

type TProps = {
  title: string;
  Up: FC;
  Down: FC;
} & TDivProps;
export const VideoMusicSynthIncrementer: FC<
  TProps
> = ({
  title,
  Up,
  Down,
  style,
  children,
  ...props
}) => {
  const s = boxSize();

  return (
    <div
      className="row relative"
      style={{
        gap: s.m0125,
        paddingLeft: s.m0125,
        paddingRight: s.m0125,
        ...style,
      }}
      {...props}
    >
      <PlayerBackgroundMesh />
      <MeshBackgroundText>
        {title}
      </MeshBackgroundText>
      <Down />
      <MeshBackgroundText
        style={{ width: s.m075 }}
      >
        <div className="text-sm">
          {children}
        </div>
      </MeshBackgroundText>
      <Up />
    </div>
  );
};
