import type { FC } from "react";
import { IconsOscillator } from "~/components/icons/oscillator";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { useNodesSourceOscillator } from "~/pages/video/music/synth/nodes/source/oscillator/create";
import { useNodesSourceOscillatorToggle } from "~/pages/video/music/synth/nodes/source/oscillator/toggle";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { SynthNodeTitle } from "~/pages/video/music/synth/nodes/node/title";
import { SynthNodeTitleButton } from "~/pages/video/music/synth/nodes/node/title/button";

type TProps = TSourceProps;
export const NodesSourceOscillator: FC<
  TProps
> = (props) => {
  const processor =
    useNodesSourceOscillator(
      props.source
    );
  const handleClick =
    useNodesSourceOscillatorToggle();
  return (
    <SynthNode
      node={props.source}
      SynthNodeTitleFc={() => (
        <SynthNodeTitleButton
          onClick={() =>
            handleClick(
              props.source,
              processor
            )
          }
          node={props.source}
        />
      )}
      // SynthNodeTitleFc={() => (
      //   <button
      //     onClick={() =>
      //       handleClick(
      //         props.source,
      //         processor
      //       )
      //     }
      //   >
      //     <SynthNodeTitle
      //       node={props.source}
      //     />
      //   </button>
      // )}
    >
      <NodesOscillator
        numbers={{
          resolveAudioParam:
          (key) => processor.node[key]
        }}
        dropdowns={{
          onValueChange: (
            value: OscillatorType
          ) => {
            processor.node.type = value;
          },
        }}
      />
    </SynthNode>
  );
};
