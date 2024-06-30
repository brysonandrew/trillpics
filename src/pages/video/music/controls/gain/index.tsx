import { FC } from "react";
import { NodesGainNumbers } from "~/pages/video/music/controls/gain/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { TMusicKey } from "~/store/state/music/types";
import { box } from "~uno/rules/box";

export type TGainNodeKey = keyof Pick<
  GainNode,
  "gain"
>;
type TProps  = {musicKey:TMusicKey}
export const ControlsGain:FC<TProps> = ({musicKey}) => {
  return (
    <NodesGainNumbers musicKey={musicKey}>
      {(Input, children) => (
        <NodesTemplate
        
          title="gain"
          Input={Input}
          style={{ gap: box.m003125 }}
        >
          {children}
        </NodesTemplate>
      )}
    </NodesGainNumbers>
  );
};
