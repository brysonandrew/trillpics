import { useMemo } from "react";
import { useAmpConnect } from "~/pages/video/music/synth/nodes/nodes/amp/connect";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const useNodesSourceBiquadCreate =
  (config: TSourceNodesProps) => {
    const { audio } = useMusicRefs();
    const handleAmp =
      useAmpConnect<BiquadFilterNode>({
        ...config,
        connect: audio.biquads.connect,
      });
    const result = useMemo(() => {
      const processor = handleAmp();

      return processor;
    }, []);

    return result;
  };
