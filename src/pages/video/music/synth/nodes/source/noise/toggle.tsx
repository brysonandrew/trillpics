import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";
import { useNodesSourceNoiseCreate } from "~/pages/video/music/synth/nodes/source/noise/create";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";

export const useNodesSourceNoiseToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handler = (
      source: TGraphSourceWithId,
      result: ReturnType<
        typeof useNodesSourceNoiseCreate
      >
    ) => {
      if (result.processor.isStarted) {
        result.processor.end(
          audio.context.currentTime
        );

        handleAmpToMaster(source);
      } else {
        result.processor.start(
          audio.context.currentTime
        );
      }

      handleAmpToMaster(source);
    };

    return handler;
  };
