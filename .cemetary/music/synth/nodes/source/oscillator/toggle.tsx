import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useAmpLastToMaster } from "~/pages/video/music/synth/nodes/nodes/amp/last/to-master";
import { TOscillator } from "~/pages/video/music/_context/refs/audio/oscillators/types";

export const useNodesSourceOscillatorToggle =
  () => {
    const { audio } = useMusicRefs();
    const handleAmpToMaster =
      useAmpLastToMaster();
    const handleClick = async (
      source: TGraphSourceWithId,
      processor: TOscillator
    ) => {
      await audio.context.resume();
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
