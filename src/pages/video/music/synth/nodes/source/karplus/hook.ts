import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";

export const useNodesSourceKarplus =
  () => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      const processor =
        audio.karpluses.connect(
          audio.gains.midis.preamp,
          WHITE_NOISE_KEY
        );

      return processor;
    }, []);
    return result;
  };
