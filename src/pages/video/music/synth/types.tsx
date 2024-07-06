import type { FC } from "react";
import { LayoutSwitch } from "~/components/layout/switch";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { TSynthSourceKey } from "~/pages/video/music/synth/nodes/sources/constants";
import { NodesSourceKarplus } from "~/pages/video/music/synth/nodes/source/karplus";
import { NodesSourceNoiseTrigger } from "~/pages/video/music/synth/nodes/source/noise";
import { NodesSourceOscillator } from "~/pages/video/music/synth/nodes/source/oscillator";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { TDivMutableRef } from "~/types/elements";

type TProps = { source: TGraphSource,containerRef:TDivMutableRef };
export const MusicSynthNodesSourceType: FC<
  TProps
> = (props) => {
  return (
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
              <NodesSourceKarplus
                {...props}
              />
            );
          }
          case "white-noise": {
            return (
              <NodesSourceNoiseTrigger
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
