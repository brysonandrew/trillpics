import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useNodesSourceKarplusCreate } from "~/pages/video/music/synth/nodes/source/karplus/create";
import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";

export const useNodesSourceKarplusToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handleClick = (
      source: TGraphSourceWithId,
      result: ReturnType<
        typeof useNodesSourceKarplusCreate
      >
    ) => {
      if (result.processor.isStarted) {
        result.processor.end(
          audio.context.currentTime
        );
        return;
      }

      result.processor.start(
        audio.context.currentTime
      );

      handleAmpToMaster(source);
    };

    return handleClick;
  };
