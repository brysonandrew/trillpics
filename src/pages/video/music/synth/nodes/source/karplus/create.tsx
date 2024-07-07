import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TKarplusParamsKey } from "~/pages/video/music/synth/nodes/karplus/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import { NodesKarplus } from "~/pages/video/music/synth/nodes/karplus";

export const useNodesSourceKarplusCreate =
  () => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      const processor =
        audio.karpluses.connect(
          audio.gains.midis.preamp,
          WHITE_NOISE_KEY
        );
      const handleUpdate = (
        name: TKarplusParamsKey,
        value: number
      ) => {
        const next = Number(value);
        processor.node.parameters.get(
          name
        ).value = next;
      };
      const resolveAudioParam = (
        key: TKarplusParamsKey
      ) => {
        return processor.node.parameters.get(
          key
        );
      };
      const ui = (
        <NodesKarplus
          resolveAudioParam={
            resolveAudioParam
          }
        />
      );

      return { processor, ui } as const;
    }, []);
    return result;
  };
