import type { FC } from "react";
import { LayoutSwitch } from "~/components/layout/switch";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { TSynthSourceKey } from "~/pages/video/music/synth/nodes/sources/constants";
import { NodesSourceKarplus } from "~/pages/video/music/synth/nodes/source/karplus";
import { NodesSourceNoiseTrigger } from "~/pages/video/music/synth/nodes/source/noise";
import { NodesSourceOscillator } from "~/pages/video/music/synth/nodes/source/oscillator";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { MusicSynthNodesLoaded } from "~/pages/video/music/synth/nodes/source/loaded";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";

type TProps = {
  source: TGraphSourceWithId;
  sourceIndex: number;
};
export const MusicSynthNodesSourceStart: FC<
  TProps
> = (props) => {
  const { layout } = useMusicRefs();

  return (
    <div
      ref={(instance) => {
        if (!instance) return;
        layout.update(
          "graph",
          props.source.id,
          instance
        );
      }}
    >
      <LayoutSwitch
        expression={props.source.key}
      >
        {(key: TSynthSourceKey) => {
          switch (key) {
            case "oscillator": {
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
                <MusicSynthNodesLoaded
                  node={props.source}
                >
                  <NodesSourceNoiseTrigger
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
    </div>
  );
};
