import type { FC } from "react";
import { LayoutSwitch } from "~/components/layout/switch";
import {
  TGraphNodeType,
  TGraphNodeWithId,
  TGraphSource,
} from "~/pages/video/music/_context/refs/audio/graph/types";
import { NodesSourceBiquad } from "~/pages/video/music/synth/nodes/nodes/biquad";
import { NodesSourceBitcrusher } from "~/pages/video/music/synth/nodes/nodes/bitcrusher";
import { NodesSourceDelay } from "~/pages/video/music/synth/nodes/nodes/delay";
import { MusicSynthNodesLoaded } from "~/pages/video/music/synth/nodes/source/loaded";

type TProps = {
  node: TGraphNodeWithId
  index: number;
  source: TGraphSource;
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
              <MusicSynthNodesLoaded
                node={props.node}
              >
                <NodesSourceBitcrusher
                  {...props}
                />
              </MusicSynthNodesLoaded>
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
