import { NodesDelayNumbers } from "~/pages/video/music/synth/nodes/delay/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { box } from "~uno/rules/box";

export const DELAY_PARAMS = ['delayTime'] as const;
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
          style={{ gap: box.m003125 }}
        >
          {children}
        </NodesTemplate>
      )}
    </NodesDelayNumbers>
  );
};
