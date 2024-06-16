import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";
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
        gap: s.m03125,
        paddingLeft: s.m03125,
        paddingRight: s.m03125,
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
        <div className="text-xs">
          {children}
        </div>
      </MeshBackgroundText>
      <Up />
    </div>
  );
};
