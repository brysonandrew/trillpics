import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import { TNoiseOptions } from "~/pages/video/music/_context/refs/audio/noises/types";

export const useNodesSourceNoise = (
  source: TGraphSourceWithId
) => {
  const { audio } = useMusicRefs();

  const result = useMemo(() => {
    const processor =
      audio.noises.connect(
        WHITE_NOISE_KEY,
        audio.gains.midis.preamp,
        source.options as TNoiseOptions
      );

    return processor;
  }, []);

  return result;
};
