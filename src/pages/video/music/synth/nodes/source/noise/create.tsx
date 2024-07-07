import { useMemo } from "react";
import { NodesNoise } from "~/pages/video/music/synth/nodes/noise";
import { TResolveAudioParam } from "~/pages/video/music/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import {
  TNoiseOptions,
  TNoiseOptionsKey,
} from "~/pages/video/music/_context/refs/audio/noises/types";

export const useNodesSourceNoiseCreate =
  (source: TGraphSourceWithId) => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      const processor =
        audio.noises.connect(
          WHITE_NOISE_KEY,
          audio.gains.midis.preamp,
          source.options as TNoiseOptions
        );
      const resolveAudioParam: TResolveAudioParam<
        TNoiseOptionsKey
      > = (key) => {
        return processor.node.parameters.get(
          key
        );
      };
      const ui = (
        <NodesNoise
          // onUpdate={(key, value) => {
          //   resolveAudioParam(
          //     key
          //   ).value = value;
          // }}
          // defaultValue={(key) => {
          //   return resolveAudioParam(
          //     key
          //   ).value;
          // }}
          resolveAudioParam={
            resolveAudioParam
          }
        />
      );

      return { processor, ui } as const;
    }, []);

    return result;
  };
