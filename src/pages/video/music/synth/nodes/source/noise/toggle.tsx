import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { TNoise } from "~/pages/video/music/_context/refs/audio/noises/types";

export const useNodesSourceNoiseToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handler = (
      source: TGraphSourceWithId,
      processor: TNoise
    ) => {
      if (processor.isStarted) {
        processor.end(
          audio.context.currentTime
        );

        handleAmpToMaster(source);
      } else {
        processor.start(
          audio.context.currentTime
        );
      }

      handleAmpToMaster(source);
    };

    return handler;
  };
