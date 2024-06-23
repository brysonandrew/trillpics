import { NodesDelaySliders } from "~/pages/video/music/synth/nodes/delay/sliders";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export type TDelayNodeKey = keyof Pick<
  DelayNode,
  "delayTime"
>;
export const NodesDelay = () => {
  return (
    <NodesTemplate title="delay line">
      <NodesDelaySliders />
    </NodesTemplate>
  );
};
