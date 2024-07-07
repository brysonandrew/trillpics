import { FC } from "react";
import { IconsTimer } from "~/components/icons/delay";
import { useNodesSourceDelayCreate } from "~/pages/video/music/synth/nodes/nodes/delay/create";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";

type TProps = TSourceNodesProps;
export const NodesSourceDelay: FC<
  TProps
> = (props) => {
  const result =
    useNodesSourceDelayCreate(props);
  return (
    <>
      {renderUi(
        'nodes',
        'delay',
        IconsTimer,
        result.ui
      )}
    </>
  );
};
