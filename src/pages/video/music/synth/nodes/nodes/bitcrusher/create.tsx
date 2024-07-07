import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { NodesBitcrusher } from "~/pages/video/music/synth/nodes/bitcrusher";
import {
  TBitcrusher,
  TBitcrusherOptionsKey,
} from "~/pages/video/music/_context/refs/audio/bitcrusher/types";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { useAmpConnect } from "~/pages/video/music/synth/nodes/nodes/amp/connect";

export const useNodesSourcesBitcrusherCreate =
  (config: TSourceNodesProps) => {
    const { audio } = useMusicRefs();
    const handleAmp =
      useAmpConnect<TBitcrusher>({
        ...config,
        connect:
          audio.bitcrushers.connect,
      });
    audio.bitcrushers.connect(
      audio.gains.master
    );
    const result = useMemo(() => {
      const processor = handleAmp();
      const resolveAudioParam = (
        key: TBitcrusherOptionsKey
      ) => {
        return processor.node.parameters.get(
          key
        );
      };

      const ui = (
        <NodesBitcrusher
          resolveAudioParam={
            resolveAudioParam
          }
        />
      );
      return { ui, processor };
    }, []);
    return result;
  };
