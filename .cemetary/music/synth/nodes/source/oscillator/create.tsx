import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";

export const useNodesSourceOscillator =
  (source: TGraphSourceWithId) => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      const processor =
        audio.oscillators.connect(
          audio.gains.midis.preamp,
          source.options as OscillatorOptions
        );

      return processor;
    }, []);

    return result;
  };
