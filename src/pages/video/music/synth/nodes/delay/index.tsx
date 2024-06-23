import { NodesDelaySliders } from "~/pages/video/music/synth/nodes/delay/sliders";

export type TDelayNodeKey = keyof Pick<
  DelayNode,
  "delayTime"
>;
export const NodesDelay = () => {
  return <NodesDelaySliders />;
};
