import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { TNoise } from "~/pages/video/music/_context/refs/audio/noises/types";

export const useNodesSourceNoiseToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handler = async (
      source: TGraphSourceWithId,
      processor: TNoise
    ) => {
      await audio.context.resume();

      if (processor.isStarted) {
        processor.end(
          audio.context.currentTime
        );
        return;
      } else {
        processor.start(
          audio.context.currentTime
        );

        console.log(
          "start ",
          processor,
          source.options
        );

        handleAmpToMaster(source);
      }
    };

    return handler;
  };
