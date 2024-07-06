import { FC } from "react";
import { IconsBiquad } from "~/components/icons/biquad";
import { IconsBitcrusher } from "~/components/icons/bitcrusher";
import { useNodesSourcesBitcrusherCreate } from "~/pages/video/music/synth/nodes/nodes/bitcrusher/create";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceNodesProps;
export const NodesSourceBitcrusher: FC<
  TProps
> = (props) => {
  const result =
    useNodesSourcesBitcrusherCreate(
      props
    );
  return (
    <>
      {renderUi(
        "nodes",
        IconsBitcrusher,
        result.ui
      )}
    </>
  );
};
