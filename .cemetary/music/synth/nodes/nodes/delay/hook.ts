import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useAmpConnect } from "~/pages/video/music/synth/nodes/nodes/amp/connect";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";

export const useNodesSourceDelayCreate =
  (config: TSourceNodesProps) => {
    const { audio } = useMusicRefs();
    const handleAmp =
      useAmpConnect<DelayNode>({
        ...config,
        connect: audio.delays.connect,
      });

    const result = useMemo(() => {
      const processor = handleAmp();
      return processor;
    }, []);

    return result;
  };
