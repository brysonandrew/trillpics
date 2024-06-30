import type { FC } from "react";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/synth/nodes/modulators/params";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/worklets/bitcrusher/constants";
import {
  TBitcrusherNumberOptionsKey,
  TBitcrusherParams,
} from "~/pages/video/music/synth/nodes/worklets/bitcrusher/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { isNull } from "~/utils/validation/is/null";

const KEY = "bitcrusher";
export const NodesBitcrusherNumbers: FC =
  () => {
    const { audio } = useMusicRefs();
    if (isNull(audio.worklets[KEY]))
      return null;
    const handleUpdate =
      (
        name: TBitcrusherNumberOptionsKey
      ) =>
      (value: number) => {
        const next = Number(value);
        if (
          !isNull(audio.worklets[KEY])
        ) {
          audio.worklets[
            KEY
          ].parameters.get(name).value =
            next;
        }
      };
    const params = BITCRUSHER_PARAMS.map((key) => {
      const handler: TUpdateNumberHandler =
        handleUpdate(key);
      if (!audio.worklets[KEY]) return;
      const param: AudioParam =
        audio.worklets[
          KEY
        ].parameters.get(key);
      return [key, param, handler];
    });
    return (
      <ModulatorsParams
        type={KEY}
        params={
          params as TBitcrusherParams
        }
      />
    );
  };
