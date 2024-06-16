import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";
import { boxSize } from "~uno/rules/box/size";
import { useTrillPicsStore } from "~/store/middleware";
import { TSequenceOptionsIncrementerKey } from "~/store/state/music/types";

type TProps = {
  name: TSequenceOptionsIncrementerKey;
  Up: FC;
  Down: FC;
} & TDivProps;
export const VideoMusicSynthIncrementer: FC<
  TProps
> = ({
  name,
  Up,
  Down,
  style,
  children,
  ...props
}) => {
  const { sequence } =
    useTrillPicsStore(
      ({ sequence }) => ({
        sequence,
      })
    );
  const s = boxSize();
  const value = sequence[name];
  const isActive = value !== 0;
  return (
    <div
      className="row relative grow"
      style={{
        gap: s.m03125,
        paddingLeft: s.m03125,
        paddingRight: s.m03125,
        height: s.m075,
        ...style,
      }}
      {...props}
    >
      {isActive && (
        <PlayerBackgroundMesh />
      )}
      <MeshBackgroundText>
        {name}
      </MeshBackgroundText>
      <Down />
      <MeshBackgroundText
        style={{ width: s.m075 }}
      >
        <div className="text-xs">
          {`${
            value > 0 ? "+" : ""
          }${value}`}
        </div>
      </MeshBackgroundText>
      <Up />
    </div>
  );
};
