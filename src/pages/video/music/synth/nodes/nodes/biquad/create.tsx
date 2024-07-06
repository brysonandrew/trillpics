import { useMemo } from "react";
import { NodesBiquad } from "~/pages/video/music/synth/nodes/biquad";
import { TBiquadFilterNumberOptionsKey } from "~/pages/video/music/synth/nodes/biquad/types";
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
      const apm = handleAmp();
      const resolveAudioParam = (
        key: TBiquadFilterNumberOptionsKey
      ): AudioParam => {
        return apm[key];
      };
      const ui = (
        <NodesBiquad
          numbers={{
            onUpdate: (key, value) => {
              resolveAudioParam(
                key
              ).value = value;
            },
            defaultValue: (key) => {
              return resolveAudioParam(
                key
              ).value;
            },
            resolveParam:
              resolveAudioParam,
          }}
          dropdowns={{
            onValueChange: (
              value: BiquadFilterType
            ) => {
              apm.type = value;
            },
          }}
        />
      );
      return { apm, ui } as const;
    }, []);

    return result;
  };
