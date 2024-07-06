import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { NodesKarplusStrong } from "~/pages/video/music/synth/nodes/karplus";
import { TKarplusStrongOptionsKey } from "~/pages/video/music/synth/nodes/karplus/types";
import {
  NOISE_PINK_KEY,
  WHITE_NOISE,
} from "~/pages/video/music/_context/refs/audio/noises";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { useMemo } from "react";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";

export const useNodesSourceKarplusCreate =
  (source:TGraphSource) => {
    const { audio } = useMusicRefs();

    const result = useMemo(() => {
      if (
        !audio.worklets[
          NOISE_PINK_KEY
        ] ||
        !audio.worklets[WHITE_NOISE] ||
        !audio.worklets[KARPLUS_KEY]
      ) {
        console.log(
          "karplus delayed ",
          audio.worklets
        );
        return;
      }

      const apm =
        audio.karpluses.connect(
          audio.gains.midis.preamp,
        );
      const handleUpdate = (
        name: TKarplusStrongOptionsKey,
        value: number
      ) => {
        const next = Number(value);
        apm.node.parameters.get(
          name
        ).value = next;
      };
      const resolveParam = (
        key: TKarplusStrongOptionsKey
      ) => {
        return apm.node.parameters.get(
          key
        );
      };
      const ui = (
        <NodesKarplusStrong
          onUpdate={handleUpdate}
          defaultValue={(name) =>
            resolveParam(name).value
          }
          resolveParam={resolveParam}
        />
      );

      return { apm, ui } as const;
    }, []);
    return result;
  };
