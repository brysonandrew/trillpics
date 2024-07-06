import type { FC } from "react";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/bitcrusher/constants";
import {
  TBitcrusherNumberOptionsKey,
  TBitcrusherParams,
} from "~/pages/video/music/synth/nodes/bitcrusher/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { isNull } from "~/utils/validation/is/null";
import {
  TUpdateNodeHandlerProps,
  TUpdateNumberHandler,
} from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";

const KEY = "bitcrusher";
export const NodesBitcrusherNumbers: FC<
  TUpdateNodeHandlerProps<TBitcrusherNumberOptionsKey>
> = (props) => {
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
        audio.bitcrushers.refs[
          KEY
        ].node.parameters.get(
          name
        ).value = next;
      }
    };
  const params = BITCRUSHER_PARAMS.map(
    (key) => {
      const handler: TUpdateNumberHandler =
        handleUpdate(key);
      if (!audio.worklets[KEY]) return;
      const param: AudioParam =
        audio.bitcrushers.refs[
          KEY
        ].node.parameters.get(key);
      return [key, param, handler];
    }
  );
  return (
    <ModulatorsParams
      type={KEY}
      params={
        params as TBitcrusherParams
      }
    />
  );
};
