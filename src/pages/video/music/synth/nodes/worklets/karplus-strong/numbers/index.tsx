import type { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/synth/nodes/modulators/params";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { isNull } from "~/utils/validation/is/null";
import { KARPLUS_STRONG_PARAMS } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/constants";
import {
  TKarplusStrongOptionsKey,
  TKarplusStrongParams,
} from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
export const KARPLUS_STRONG_KEY =
  "karplus-strong" as const;
export const OSCILLATOR_KEY =
  "oscillator" as const;

export const NodesKarplusStrongNumbers: FC<
  TUpdateNodeHandlerProps<TKarplusStrongOptionsKey>
> = ({ onUpdate }) => {
  const { audio, layout } =
    useMusicRefs();

  const params =
    KARPLUS_STRONG_PARAMS.map((key) => {
      const handler = (v: number) => {
        onUpdate?.(key, v);
      };
      if (
        isNull(
          audio.worklets[
            KARPLUS_STRONG_KEY
          ]
        )
      )
        return [key, null, handler];
      const param: AudioParam =
        audio.worklets[
          KARPLUS_STRONG_KEY
        ].parameters.get(key);
      return [key, param, handler];
    });
  return (
    <ModulatorsParams
      type={KARPLUS_STRONG_KEY}
      params={
        params as TKarplusStrongParams
      }
    />
  );
};
