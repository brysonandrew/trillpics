import type { FC } from "react";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/synth/nodes/modulators/params";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { isNull } from "~/utils/validation/is/null";
import { KARPLUS_STRONG_PARAMS } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/constants";
import {
  TKarplusStrongNumberOptionsKey,
  TKarplusStrongParams,
} from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
const KEY = "karplus-strong";
export const NodesKarplusStrongNumbers: FC =
  () => {
    const { audio, layout } =
      useMusicRefs();

    const handleUpdate =
      (
        name: TKarplusStrongNumberOptionsKey
      ) =>
      (value: number) => {
        const next = Number(value);
        if (isNull(audio.worklets[KEY]))
          return;
        audio.worklets[
          KEY
        ].parameters.get(name).value =
          next;
      };
    const params =
      KARPLUS_STRONG_PARAMS.map(
        (key) => {
          const handler: TUpdateNumberHandler =
            handleUpdate(key);
          if (
            isNull(audio.worklets[KEY])
          )
            return [key, null, handler];
          const param: AudioParam =
            audio.worklets[
              KEY
            ].parameters.get(key);
          return [key, param, handler];
        }
      );
    return (
    
        <ModulatorsParams
          type={KEY}
          params={
            params as TKarplusStrongParams
          }
        />

    );
  };
