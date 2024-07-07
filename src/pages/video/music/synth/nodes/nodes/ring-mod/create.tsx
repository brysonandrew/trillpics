import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { useAmpConnect } from "~/pages/video/music/synth/nodes/nodes/amp/connect";
import { NodesRingMod } from "~/pages/video/music/synth/nodes/ring-mod";
import {
  TRingMod,
  TRingModParamsKey,
} from "~/pages/video/music/_context/refs/audio/ring-mod/types";

export const useNodesSourcesRingModCreate =
  (config: TSourceNodesProps) => {
    const { audio } = useMusicRefs();
    const handleAmp =
      useAmpConnect<TRingMod>({
        ...config,
        connect: audio.ringMods.connect,
      });

    const result = useMemo(() => {
      const processor = handleAmp();
      const resolveAudioParam = (
        key: TRingModParamsKey
      ) => {
        const audioParam =
          processor.node.parameters.get(
            key
          );
        return audioParam;
      };
      const ui = (
        <NodesRingMod
          resolveAudioParam={(
            key: TRingModParamsKey
          ) => {
            return resolveAudioParam(
              key
            );
          }}
        />
      );
      return { ui, processor };
    }, []);
    return result;
  };
