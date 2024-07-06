import { useMemo } from "react";
import { NodesNoise } from "~/pages/video/music/synth/nodes/noise";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { TNoiseOptionsKey } from "~/pages/video/music/_context/refs/audio/noises/types";

export const useNodesSourceNoiseCreate =
  (source: TGraphSource) => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      // if (source.key !== "white-noise")
      //   return;
      const apm = audio.noises.connect(
        "white-noise",
        audio.gains.midis.preamp,
        source.options as any
      );

      const resolveAudioParam = (
        key: TNoiseOptionsKey
      ) => {
        return apm.node.parameters.get(
          key
        );
      };
      const ui = (
        <NodesNoise
          onUpdate={(key, value) => {
            console.log(
              apm,
              apm.node,
              key,
              value
            );
            resolveAudioParam(
              key
            ).value = value;
          }}
          defaultValue={(key) => {
            return resolveAudioParam(
              key
            ).value;
          }}
          resolveParam={
            resolveAudioParam
          }
        />
      );

      return { apm, ui } as const;
    }, []);

    return result;
  };
