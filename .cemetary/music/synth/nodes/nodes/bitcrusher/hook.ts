import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TBitcrusher } from "~/pages/video/music/_context/refs/audio/bitcrusher/types";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { useAmpConnect } from "~/pages/video/music/synth/nodes/nodes/amp/connect";

export const useNodesSourcesBitcrusher =
  (config: TSourceNodesProps) => {
    const { audio } = useMusicRefs();
    const handleAmp =
      useAmpConnect<TBitcrusher>({
        ...config,
        connect:
          audio.bitcrushers.connect,
      });
    const result = useMemo(() => {
      const processor = handleAmp();
      return processor;
    }, []);
    return result;
  };
