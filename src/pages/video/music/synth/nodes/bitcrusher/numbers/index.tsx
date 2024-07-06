import type { FC } from "react";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/bitcrusher/constants";
import {
  TBitcrusherNumberOptionsKey,
  TBitcrusherParams,
} from "~/pages/video/music/synth/nodes/bitcrusher/types";
import {
  TUpdateNodeHandlerProps,
  TUpdateNumberHandler,
} from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";

export const NodesBitcrusherNumbers: FC<
  TUpdateNodeHandlerProps<TBitcrusherNumberOptionsKey>
> = (props) => {
  const params = BITCRUSHER_PARAMS.map(
    (key) => {
      const handler: TUpdateNumberHandler =
        (value: number) => {
          props.onUpdate(key, value);
        };

      const param =
        props.resolveParam(key);

      return [key, param, handler];
    }
  );
  return (
    <ModulatorsParams
      type="bitcrusher"
      params={
        params as TBitcrusherParams
      }
    />
  );
};
