import type { FC } from "react";
import { TResolveAudioParamProps } from "~/pages/video/music/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import {
  DELAY_KEY,
  DELAY_PARAMS,
} from "~/pages/video/music/synth/nodes/delay/constants";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";

type TProps =
  TResolveAudioParamProps<TDelayNodeKey>;
export const NodesDelay: FC<TProps> = (
  props
) => {
  return (
    <ModulatorsParams
      graphKey={DELAY_KEY}
      keys={DELAY_PARAMS}
      {...props}
    />
  );
};
