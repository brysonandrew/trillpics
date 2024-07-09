import { ampLast } from "~/pages/video/music/synth/nodes/nodes/amp/last";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { isDefined } from "~/utils/validation/is/defined";
import { isNull } from "~/utils/validation/is/null";

export const useAmpLastToMaster =
  () => {
    const { audio } = useMusicRefs();
    const handler = (
      source: TGraphSourceWithId
    ) => {
      const lastAmp = ampLast(
        source.nodes
      );

      if (
        isDefined(lastAmp) &&
        !isNull(lastAmp)
      ) {
        lastAmp.connect(
          audio.gains.midis.master
        );
      } else {
        console.log(
          "direct connection, preamp to master"
        );
        audio.gains.midis.preamp.connect(
          audio.gains.midis.master
        );
      }
    };
    return handler;
  };
