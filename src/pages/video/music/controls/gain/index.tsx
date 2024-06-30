import { FC } from "react";
import { NodesGainNumbers } from "~/pages/video/music/controls/gain/numbers";
import {
  NodesTemplate,
  TNodesTemplateProps,
} from "~/pages/video/music/synth/nodes/template";
import { TMusicKey } from "~/store/state/music/types";
import { box } from "~uno/rules/box";

export type TGainNodeKey = keyof Pick<
  GainNode,
  "gain"
>;
type TProps = {
  ampKey: "master" | "preamp";
  musicKey: TMusicKey;
} & Partial<TNodesTemplateProps>;
export const ControlsGain: FC<
  TProps
> = ({ musicKey, ampKey, style, ...props }) => {
  return (
    <NodesGainNumbers
    ampKey={ampKey}
      musicKey={musicKey}
    >
      {(Input, children) => (
        <NodesTemplate
          title="gain"
          Input={Input}
          style={{
            gap: box.m003125,
            ...style,
          }}

          {...props}
        >
          {children}
        </NodesTemplate>
      )}
    </NodesGainNumbers>
  );
};
