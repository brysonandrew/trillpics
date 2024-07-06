import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphNode } from "~/pages/video/music/_context/refs/audio/graph/types";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { isBitcrusher } from "~/utils/music/validation";
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
        connect: (gain) =>
          audio.bitcrushers.connect(
            gain
          ),
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
          if (!isBitcrusher(apm))
            return;

          return resolveAudioParam(key)
            .value;
        },
        resolveParam: (key) => {
          if (!isBitcrusher(apm))
            return;

          return resolveAudioParam(key);
        },
        onUpdate: (key, value) => {
          if (!isBitcrusher(apm))
            return;

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
