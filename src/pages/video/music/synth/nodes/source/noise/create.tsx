import { useMemo } from "react";
import { NodesNoise } from "~/pages/video/music/synth/nodes/noise";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import {
  TNoiseOptions,
  TNoiseOptionsKey,
} from "~/pages/video/music/_context/refs/audio/noises/types";

export const useNodesSourceNoiseCreate =
  (source: TGraphSource) => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      const apm = audio.noises.connect(
        WHITE_NOISE_KEY,
        audio.gains.midis.master,
        source.options as TNoiseOptions
      );

      audio.gains.midis.master.connect(
        audio.context.destination
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
