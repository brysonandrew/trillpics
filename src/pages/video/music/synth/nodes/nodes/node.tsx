import type { FC } from "react";
import { LayoutSwitch } from "~/components/layout/switch";
import { TGraphNodeType, TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { NodesSourceBiquad } from "~/pages/video/music/synth/nodes/nodes/biquad";
import { NodesSourceBitcrusher } from "~/pages/video/music/synth/nodes/nodes/bitcrusher";
import { NodesSourceDelay } from "~/pages/video/music/synth/nodes/nodes/delay";
import { TDivMutableRef } from "~/types/elements";

type TProps = {
  node: TGraphNodeType;
  index:number;
  source:TGraphSource
  containerRef: TDivMutableRef;
};
export const MusicSynthNodesSourceNode: FC<
  TProps
> = (props) => {
  return (
    <LayoutSwitch
      expression={props.node.key}
    >
      {(key: TGraphNodeType["key"]) => {
        switch (key) {
          case "biquad": {
            return (
              <NodesSourceBiquad
                {...props}
              />
            );
          }
          case "bitcrusher": {
            return (
              <NodesSourceBitcrusher
                {...props}
              />
            );
          }
          case "delay": {
            return (
              <NodesSourceDelay
                {...props}
              />
            );
          }

          default:
            return null;
        }
      }}
    </LayoutSwitch>
  );
};
