import type { FC } from "react";
import { IconsGuitar } from "~/components/icons/guitar";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { useNodesSourceKarplusCreate } from "~/pages/video/music/synth/nodes/source/karplus/create";
import { useNodesSourceKarplusToggle } from "~/pages/video/music/synth/nodes/source/karplus/toggle";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceProps;
export const NodesSourceKarplus: FC<
  TProps
> = (props) => {
  const { source } = props;
  const result =
    useNodesSourceKarplusCreate();
  const handleClick =
    useNodesSourceKarplusToggle();
  return (
    <>
      {renderUi(
        'sources',

        () => (
          <button
            onClick={() =>
              handleClick(
                source,
                result
              )
            }
          >
            <IconsGuitar />
          </button>
        ),
        result?.ui
      )}
    </>
  );
};
