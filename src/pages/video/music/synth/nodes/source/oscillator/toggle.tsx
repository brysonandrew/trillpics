import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";
import { TOscillator } from "~/pages/video/music/_context/refs/audio/oscillators/types";

export const useNodesSourceOscillatorToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handleClick = (
      source: TGraphSourceWithId,
      processor: TOscillator
    ) => {
      if (processor.isStarted) {
        processor.end(
          audio.context.currentTime
        );
        console.log("END");

        return;
      }

      processor.start(
        audio.context.currentTime
      );

      handleAmpToMaster(source);
    };

    return handleClick;
  };
