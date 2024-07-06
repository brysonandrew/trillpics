import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";

export const useNodesSourceOscillatorCreate =
  (source: TGraphSource) => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      const apm =
        audio.oscillators.connect(
          audio.gains.midis.preamp,
          source.options as any
        );

   
      const ui = (
        <NodesOscillator
          numbers={{
            onUpdate: (key, value) => {
              apm.node[key].value =
                value;
            },
            defaultValue: (key) => {
              return apm.node[key]
                .value;
            },
            resolveParam: (key) => {
              return apm.node[key];
            },
          }}
          dropdowns={{
            onValueChange: (
              value: OscillatorType
            ) => {
              apm.node.type = value;
            },
          }}
        />
      );

      return { apm, ui } as const;
    }, []);

    return result;
  };
