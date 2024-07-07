import type { FC } from "react";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { SynthNodeTitle } from "~/pages/video/music/synth/nodes/node/title";
import { SynthNodeTitleButton } from "~/pages/video/music/synth/nodes/node/title/button";
import { NodesNoise } from "~/pages/video/music/synth/nodes/noise";
import { useNodesSourceNoise } from "~/pages/video/music/synth/nodes/source/noise/hook";
import { useNodesSourceNoiseToggle } from "~/pages/video/music/synth/nodes/source/noise/toggle";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceProps;
export const NodesSourceNoise: FC<
  TProps
> = (props) => {
  const { source } = props;
  const processor =
    useNodesSourceNoise(source);
  const handleClick =
    useNodesSourceNoiseToggle();
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
      // <InputsSelect
      //   onValueChange={(value:TSynthSourceKey) =>
      //     handleClick(
      //       props.source,
      //       result
      //     )
      //   }
      // />
      //   <IconsWhiteNoise />
      // </button>
      // ),
    >
      <NodesNoise
        resolveAudioParam={
         (key) => processor.node.parameters.get(key)
        }
      />
    </SynthNode>
  );
};
