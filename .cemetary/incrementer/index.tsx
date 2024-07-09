import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";
import { boxSize } from "~uno/rules/box/size";
import { useTrillPicsStore } from "~/store/middleware";
import { TSequenceOptionsIncrementerKey } from "~/store/state/music/types";
import { TXyAxis } from "@brysonandrew/motion-config-types";
import { VideoMusicSynthIncrementerControl } from "~/pages/video/music/synth/incrementer/control";

type TProps = {
  name: TSequenceOptionsIncrementerKey;
  direction?: TXyAxis;
} & TDivProps;
export const VideoMusicSynthIncrementer: FC<
  TProps
> = ({
  style,
  children,
  direction = "x",
  ...props
}) => {
  const { sequence } =
    useTrillPicsStore(
      ({ sequence }) => ({
        sequence,
      })
    );
  const s = boxSize();
  const value = sequence[props.name];
  const isActive = value !== 0;
  return (
    <div
      className="column h-3/4 lg:row lg:h-1/2 relative grow"
      style={{
        gap: s.m03125,
        paddingLeft: s.m03125,
        paddingRight: s.m03125,
        ...style,
      }}
      {...props}
    >
      {isActive && (
        <PlayerBackgroundMesh />
      )}
      <MeshBackgroundText>
        {props.name}
      </MeshBackgroundText>
      <div className="row">
        <VideoMusicSynthIncrementerControl
          isDisabled={value <= 0}
          type="down"
          direction={direction}
          {...props}
        />
        <MeshBackgroundText
          style={{ width: s.m075, height:s.m05 }}
        >
          <div className="text-xs">
            {`${
              value > 0 ? "+" : ""
            }${value}`}
          </div>
        </MeshBackgroundText>
        <VideoMusicSynthIncrementerControl
          isDisabled={value > 8}
          type="up"
          direction={direction}
          {...props}
        />
      </div>
    </div>
  );
};
