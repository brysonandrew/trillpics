import { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { NodesDelayNumbers } from "~/pages/video/music/synth/nodes/delay/numbers";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { box } from "~uno/rules/box";

export const NodesDelay: FC<
  TUpdateNodeHandlerProps<TDelayNodeKey>
> = (props) => {
  return (
    <NodesDelayNumbers {...props}>
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
