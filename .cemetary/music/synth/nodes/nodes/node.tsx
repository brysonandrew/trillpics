import type { FC } from "react";
import { LayoutSwitch } from "~/components/layout/switch";
import {
  TGraphNodeType,
  TGraphNodeWithId,
  TGraphSourceWithId,
} from "~/pages/video/music/_context/refs/audio/graph/types";
import { NodesSourceBiquad } from "~/pages/video/music/synth/nodes/nodes/biquad";
import { NodesSourceBitcrusher } from "~/pages/video/music/synth/nodes/nodes/bitcrusher";
import { NodesSourceDelay } from "~/pages/video/music/synth/nodes/nodes/delay";
import { MusicSynthNodesLoaded } from "~/pages/video/music/synth/nodes/source/loaded";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";
import { NodesSourceRingMod } from "~/pages/video/music/synth/nodes/nodes/ring-mod";
import { RING_MOD_KEY } from "~/pages/video/music/_context/refs/audio/ring-mod";
import { NodesSourceGainsMidisPreamp } from "~/pages/video/music/synth/nodes/nodes/gains/midis/preamp";
import { NodesSourceGainsMidisMaster } from "~/pages/video/music/synth/nodes/nodes/gains/midis/master";
import { BIQUAD_KEY } from "~/pages/video/music/synth/nodes/biquad/constants";
import { DELAY_KEY } from "~/pages/video/music/synth/nodes/delay/constants";

type TProps = {
  node: TGraphNodeWithId;
  index: number;
  source: TGraphSourceWithId;
};
export const MusicSynthNodesSourceNode: FC<
  TProps
> = (props) => {
  const { node } = props;
  return (
    <LayoutSwitch expression={node.key}>
      {(key: TGraphNodeType["key"]) => {
        switch (key) {
          case "gains.midis.preamp": {
            return (
              <NodesSourceGainsMidisPreamp
                {...props}
              />
            );
          }
          case "gains.midis.master": {
            return (
              <NodesSourceGainsMidisMaster
                {...props}
              />
            );
          }
          case RING_MOD_KEY: {
            return (
              <MusicSynthNodesLoaded
                node={node}
              >
                <NodesSourceRingMod
                  {...props}
                />
              </MusicSynthNodesLoaded>
            );
          }
          case BIQUAD_KEY: {
            return (
              <NodesSourceBiquad
                {...props}
              />
            );
          }
          case BITCRUSHER_KEY: {
            return (
              <MusicSynthNodesLoaded
                node={node}
              >
                <NodesSourceBitcrusher
                  {...props}
                />
              </MusicSynthNodesLoaded>
            );
          }
          case DELAY_KEY: {
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
