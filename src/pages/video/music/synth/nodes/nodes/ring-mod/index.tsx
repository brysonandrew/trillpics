import { FC } from "react";
import { IconsRingMod } from "~/components/icons/ring-mod";
import { useNodesSourcesRingModCreate } from "~/pages/video/music/synth/nodes/nodes/ring-mod/create";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceNodesProps;
export const NodesSourceRingMod: FC<
  TProps
> = (props) => {
  const result =
    useNodesSourcesRingModCreate(props);
  return (
    <>
      {renderUi(
        "nodes",
        "ring mod",
        IconsRingMod,
        result.ui
      )}
    </>
  );
};
