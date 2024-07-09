import { FC } from "react";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { TDualAmp } from "~/pages/video/music/_context/refs/audio/gains/types";
import { TMusicKey } from "~/store/state/music/types";
import { ControlsGain } from "~/pages/video/music/controls/gain";

export type TNodesSourceGainsProps =
  TSourceNodesProps & {
    ampKey: keyof TDualAmp;
    musicKey: TMusicKey;
  };
export const NodesSourceGains: FC<
  TNodesSourceGainsProps
> = (props) => {
  const { ampKey, musicKey } = props;
  return (
    <SynthNode
      node={props.node}
    >
      <ControlsGain
        musicKey={musicKey}
        ampKey={ampKey}
      />
    </SynthNode>
  );
};
