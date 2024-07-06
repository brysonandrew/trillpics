import { useMemo } from "react";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TUpdateNodeHandler } from "~/components/inputs/slider/types";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import { isDelayNode } from "~/utils/music/validation";
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
      const apm = handleAmp();
      const handleUpdate: TUpdateNodeHandler<
        TDelayNodeKey
      > = (key, ui: number) => {
        if (isDelayNode(apm)) {
          apm[key].value = ui;
        }
      };
      const defaultValue = (
        key: TDelayNodeKey
      ) => {
        if (!isDelayNode(apm)) return;

        return apm[key].value;
      };
      const resolveParam = (
        key: TDelayNodeKey
      ) => {
        if (!isDelayNode(apm)) return;

        return apm[key];
      };
      const ui = (
        <NodesDelay
          resolveParam={resolveParam}
          defaultValue={defaultValue}
          onUpdate={handleUpdate}
        />
      );
      return { apm, ui } as const;
    }, []);
    return result;
  };
