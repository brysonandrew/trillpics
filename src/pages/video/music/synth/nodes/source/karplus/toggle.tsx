import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { isDefined } from "~/utils/validation/is/defined";
import { useNodesSourceKarplusCreate } from "~/pages/video/music/synth/nodes/source/karplus/create";

export const useNodesSourceKarplusToggle =
  () => {
    const { audio } = useMusicRefs();

    const handleClick = (
      source: TGraphSource,
      result: ReturnType<
        typeof useNodesSourceKarplusCreate
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
