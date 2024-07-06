import type { FC } from "react";
import {
  TUpdateNodeHandlerProps,
  TUpdateNumberHandler,
} from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { NOISE_PARAMS } from "~/pages/video/music/synth/nodes/noise/constants";
import {
  TNoiseNumberOptionsKey,
  TNoiseParam,
} from "~/pages/video/music/synth/nodes/noise/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { isNull } from "~/utils/validation/is/null";

const KEY = "white-noise" as const;
export const NodesNoiseNumbers: FC<
  TUpdateNodeHandlerProps<TNoiseNumberOptionsKey>
> = ({
  resolveParam,
  onUpdate,
  defaultValue,
}) => {
  const { audio } = useMusicRefs();
  const handleUpdate =
    (name: TNoiseNumberOptionsKey) =>
    (value: number) => {
      const next = Number(value);
      if (
        !isNull(audio.worklets[KEY])
      ) {
        onUpdate(name, next);
      }
    };
  const params = NOISE_PARAMS.map(
    (key) => {
      const handler: TUpdateNumberHandler =
        handleUpdate(key);
      if (!audio.worklets[KEY]) return;
      const param = resolveParam(key);
      return [key, param, handler];
    }
  );
  return (
    <ModulatorsParams
      type={KEY}
      params={params as TNoiseParam[]}
    />
  );
};
