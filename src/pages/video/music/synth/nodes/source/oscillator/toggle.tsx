import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useNodesSourceOscillatorCreate } from "~/pages/video/music/synth/nodes/source/oscillator/create";
import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";

export const useNodesSourceOscillatorToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handleClick = (
      source: TGraphSourceWithId,
      result: ReturnType<
        typeof useNodesSourceOscillatorCreate
      >
    ) => {
      if (result.processor.isStarted) {
        result.processor.end(
          audio.context.currentTime
        );
        console.log("END");

        return;
      }

      result.processor.start(
        audio.context.currentTime
      );

      handleAmpToMaster(source);
    };

    return handleClick;
  };
