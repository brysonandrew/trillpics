import type { FC } from "react";
import { IconsWhiteNoise } from "~/components/icons/white-noise";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { useNodesSourceNoiseCreate } from "~/pages/video/music/synth/nodes/source/noise/create";
import { useNodesSourceNoiseToggle } from "~/pages/video/music/synth/nodes/source/noise/toggle";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceProps;
export const NodesSourceNoiseTrigger: FC<
  TProps
> = (props) => {
  const { source } = props;
  const result =
    useNodesSourceNoiseCreate(source);
  const handleClick =
    useNodesSourceNoiseToggle();
  return (
    <>
      {renderUi(
        'sources',
        () => (
          <button
            onClick={() =>
              handleClick(
                props.source,
                result
              )
            }
          >
            <IconsWhiteNoise />
          </button>
        ),
        result.ui
      )}
    </>
  );
};
