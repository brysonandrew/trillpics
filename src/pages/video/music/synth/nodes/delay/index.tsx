import { NodesDelayNumbers } from "~/pages/video/music/synth/nodes/delay/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export type TDelayNodeKey = keyof Pick<
  DelayNode,
  "delayTime"
>;
export const NodesDelay = () => {
  return (
    <NodesDelayNumbers>
      {(Input, children) => (
        <NodesTemplate
          title="delay line"
          Input={Input}
        >
          {children}
        </NodesTemplate>
      )}
    </NodesDelayNumbers>
  );
};
