import { useMemo } from "react";
import { TResolveAudioParam } from "~/pages/video/music/types";
import { NodesBiquad } from "~/pages/video/music/synth/nodes/biquad";
import { TBiquadFilterParamKey } from "~/pages/video/music/synth/nodes/biquad/types";
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
      const resolveAudioParam: TResolveAudioParam<
        TBiquadFilterParamKey
      > = (
        key: TBiquadFilterParamKey
      ): AudioParam => {
        return processor[key];
      };
      const ui = (
        <NodesBiquad
          numbers={{
            resolveAudioParam,
          }}
          dropdowns={{
            onValueChange: (
              value: BiquadFilterType
            ) => {
              processor.type = value;
            },
          }}
        />
      );
      return { processor, ui } as const;
    }, []);

    return result;
  };
