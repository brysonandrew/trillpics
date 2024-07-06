import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useNodesSourceOscillatorCreate } from "~/pages/video/music/synth/nodes/source/oscillator/create";
import { isDefined } from "~/utils/validation/is/defined";

export const useNodesSourceOscillatorToggle =
  () => {
    const { audio } = useMusicRefs();

    const handleClick = (
      source: TGraphSource,
      result: ReturnType<
        typeof useNodesSourceOscillatorCreate
      >
    ) => {
      if (!result) return;
      if (result.apm.isStarted) {
        result.apm.end();
        console.log("END");

        return;
      }
      result.apm.output.connect(
        audio.gains.midis.preamp
      );

      result.apm.start();

      const last =
        source.nodes[
          source.nodes.length - 1
        ].amp;
      if (isDefined(last)) {
        last.connect(
          audio.gains.midis.master
        );
      }
    };

    return handleClick;
  };
