import type { FC } from "react";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import {
  KARPLUS_KEY,
  KARPLUS_PARAMS,
} from "~/pages/video/music/synth/nodes/karplus/constants";
import { TKarplusParamsKey } from "~/pages/video/music/synth/nodes/karplus/types";
import { TResolveAudioParamProps } from "~/pages/video/music/types";

export const NodesKarplus: FC<
  TResolveAudioParamProps<TKarplusParamsKey>
> = (props) => {
  return (
    <ModulatorsParams
      graphKey={KARPLUS_KEY}
      keys={KARPLUS_PARAMS}
      {...props}
    />
  );
};
