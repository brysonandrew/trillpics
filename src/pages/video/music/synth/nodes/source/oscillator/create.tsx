import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import {
  TGraphSource,
  TGraphSourceWithId,
} from "~/pages/video/music/_context/refs/audio/graph/types";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { TResolveAudioParam } from "~/pages/video/music/types";
import { TOscillatorParamKey } from "~/pages/video/music/synth/nodes/oscillator/types";

export const useNodesSourceOscillatorCreate =
  (source: TGraphSourceWithId) => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      const processor =
        audio.oscillators.connect(
          audio.gains.midis.preamp,
          source.options as OscillatorOptions
        );
      const resolveAudioParam: TResolveAudioParam<
        TOscillatorParamKey
      > = (key) => {
        return processor.node[key];
      };
      const ui = (
        <NodesOscillator
          numbers={{resolveAudioParam:resolveAudioParam
            // onUpdate: (key, value) => {
            //   resolveAudioParam(key).value =
            //     value;
            // },
            // defaultValue: (key) => {
            //   return resolveAudioParam(key)
            //     .value;
            // },
            ,
          }}
          dropdowns={{
            onValueChange: (
              value: OscillatorType
            ) => {
              processor.node.type =
                value;
            },
          }}
        />
      );

      return { processor, ui } as const;
    }, []);

    return result;
  };
