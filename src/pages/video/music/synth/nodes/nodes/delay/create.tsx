import { useMemo } from "react";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import { useAmpConnect } from "~/pages/video/music/synth/nodes/nodes/amp/connect";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";

export const useNodesSourceDelayCreate =
  (config: TSourceNodesProps) => {
    const { audio } = useMusicRefs();
    const handleAmp =
      useAmpConnect<DelayNode>({
        ...config,
        connect: audio.delays.connect,
      });

    const result = useMemo(() => {
      const processor = handleAmp();
      const resolveAudioParam = (
        key: TDelayNodeKey
      ) => {
        return processor[key];
      };
      const ui = (
        <NodesDelay
          resolveAudioParam={
            resolveAudioParam
          }
        />
      );
      return { processor, ui } as const;
    }, []);

    return result;
  };
