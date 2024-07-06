import type { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import {
  KARPLUS_KEY,
  KARPLUS_STRONG_PARAMS,
} from "~/pages/video/music/synth/nodes/karplus/constants";
import {
  TKarplusStrongOptionsKey,
  TKarplusStrongParams,
} from "~/pages/video/music/synth/nodes/karplus/types";

export const NodesKarplusStrongNumbers: FC<
  TUpdateNodeHandlerProps<TKarplusStrongOptionsKey>
> = (props) => {
  const { onUpdate } = props;
  const params =
    KARPLUS_STRONG_PARAMS.map((key) => {
      const handler = (v: number) => {
        onUpdate?.(key, v);
      };
      const param =
        props.resolveParam(key);
      return [key, param, handler];
    });
  return (
    <ModulatorsParams
      type={KARPLUS_KEY}
      params={
        params as TKarplusStrongParams
      }
    />
  );
};
