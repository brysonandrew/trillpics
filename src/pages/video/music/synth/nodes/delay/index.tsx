import { resolveSquare } from "@brysonandrew/measure";
import { IconsPlus14 } from "~/components/icons/plus/14";
import { NodesDelayNumbers } from "~/pages/video/music/synth/nodes/delay/numbers";
import { ModulatorsAdd } from "~/pages/video/music/synth/nodes/modulators/add";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { box } from "~uno/rules/box";

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
