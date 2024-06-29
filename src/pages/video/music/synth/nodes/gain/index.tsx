import { NodesGainNumbers } from "~/pages/video/music/synth/nodes/gain/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export type TGainNodeKey = keyof Pick<
  GainNode,
  "gain"
>;
export const NodesGain = () => {
  return (
    <NodesGainNumbers>
      {(Input, children) => (
        <NodesTemplate
          title="gain"
          Input={Input}
        >
          {children}
        </NodesTemplate>
      )}
    </NodesGainNumbers>
  );
};
