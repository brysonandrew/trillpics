import { FC } from "react";
import { IconsBiquad } from "~/components/icons/biquad";
import { useNodesSourceBiquadCreate } from "~/pages/video/music/synth/nodes/nodes/biquad/create";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceNodesProps;
export const NodesSourceBiquad: FC<
  TProps
> = (props) => {
  const result =
    useNodesSourceBiquadCreate(props);
  return (
    <>
      {renderUi(
        'nodes',
        IconsBiquad,
        result.ui
      )}
    </>
  );
};
