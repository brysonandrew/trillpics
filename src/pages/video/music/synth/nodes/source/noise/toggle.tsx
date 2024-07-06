import { useNodesSourceNoiseCreate } from "~/pages/video/music/synth/nodes/source/noise/create";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { isDefined } from "~/utils/validation/is/defined";

export const useNodesSourceNoiseToggle =
  () => {
    const { audio } = useMusicRefs();
    const handler = (
      source: TGraphSource,
      result: ReturnType<
        typeof useNodesSourceNoiseCreate
      >
    ) => {
      if (result.apm.isStarted) {
        result.apm.end(
          audio.context.currentTime
        );

        const last =
          source.nodes[
            source.nodes.length - 1
          ].amp;
        if (isDefined(last)) {
          last.connect(
            audio.gains.midis.master
          );
        }
      } else {
        result.apm.start(
          audio.context.currentTime
        );
      }
    };

    return handler;
  };
