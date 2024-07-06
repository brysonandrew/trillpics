import type { FC } from "react";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { NodesNoiseNumbers } from "~/pages/video/music/synth/nodes/noise/numbers";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { TNoiseNumberOptionsKey } from "~/pages/video/music/synth/nodes/noise/types";

export const NodesNoise: FC<
  TUpdateNodeHandlerProps<TNoiseNumberOptionsKey>
> = (props) => {
  return (
    <NodesTemplate title="noise">
      <NodesNoiseNumbers {...props} />
    </NodesTemplate>
  );
};
