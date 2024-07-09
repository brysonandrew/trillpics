import type { FC } from "react";
import { LayoutSwitch } from "~/components/layout/switch";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { TSynthSourceKey } from "~/pages/video/music/synth/nodes/sources/constants";
import { NodesSourceKarplus } from "~/pages/video/music/synth/nodes/source/karplus";
import { NodesSourceNoise } from "~/pages/video/music/synth/nodes/source/noise";
import { NodesSourceOscillator } from "~/pages/video/music/synth/nodes/source/oscillator";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { MusicSynthNodesLoaded } from "~/pages/video/music/synth/nodes/source/loaded";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { TSourceEntryProps } from "~/pages/video/music/synth/nodes/source/types";

export const MusicSynthNodesSourceEntry: FC<
  TSourceEntryProps
> = (props) => {
  return (
    <LayoutSwitch
      expression={props.source.key}
    >
      {(key: TSynthSourceKey) => {
        switch (key) {
          case OSCILLATOR_KEY: {
            return (
              <NodesSourceOscillator
                {...props}
              />
            );
          }
          case KARPLUS_KEY: {
            return (
              <MusicSynthNodesLoaded
                node={props.source}
              >
                <NodesSourceKarplus
                  {...props}
                />
              </MusicSynthNodesLoaded>
            );
          }
          case WHITE_NOISE_KEY: {
            return (
              // null
              <MusicSynthNodesLoaded
                node={props.source}
              >
                <NodesSourceNoise
                  {...props}
                />
              </MusicSynthNodesLoaded>
            );
          }
          default:
            return null;
        }
      }}
    </LayoutSwitch>
  );
};
