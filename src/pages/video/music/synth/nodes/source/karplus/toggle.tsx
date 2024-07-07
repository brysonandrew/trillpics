import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";
import { TKarplus } from "~/pages/video/music/_context/refs/audio/karpluses/types";

export type TSourceToggleHandler = (
  source: TGraphSourceWithId,
  processor: TKarplus
) => void;
export const useNodesSourceKarplusToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handleClick: TSourceToggleHandler =
      (
        source: TGraphSourceWithId,
        processor: TKarplus
      ) => {
        if (processor.isStarted) {
          processor.end(
            audio.context.currentTime
          );
          return;
        }

        processor.start(
          audio.context.currentTime
        );

        handleAmpToMaster(source);
      };

    return handleClick;
  };
