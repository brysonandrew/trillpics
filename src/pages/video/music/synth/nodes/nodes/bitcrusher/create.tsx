import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
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
    const result = useMemo(() => {
      const apm = handleAmp();
      const resolveAudioParam = (
        key: TBitcrusherOptionsKey
      ) => {
        return apm.node.parameters.get(
          key
        );
      };

      const props = {
        defaultValue: (key) => {
          return resolveAudioParam(key)
            .value;
        },
        resolveParam: (key) => {
          return resolveAudioParam(key);
        },
        onUpdate: (key, value) => {
          resolveAudioParam(key).value =
            value;
        },
      } as TUpdateNodeHandlerProps<TBitcrusherOptionsKey>;

      const ui = (
        <NodesBitcrusher {...props} />
      );
      return { ui, apm };
    }, []);
    return result;
  };
