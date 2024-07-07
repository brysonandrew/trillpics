import type { FC } from "react";
import { IconsWhiteNoise } from "~/components/icons/white-noise";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { useNodesSourceNoiseCreate } from "~/pages/video/music/synth/nodes/source/noise/create";
import { useNodesSourceNoiseToggle } from "~/pages/video/music/synth/nodes/source/noise/toggle";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";

type TProps = TSourceProps;
export const NodesSourceNoise: FC<
  TProps
> = (props) => {
  const { source } = props;
  props.source.refs[WHITE_NOISE_KEY] =
    useNodesSourceNoiseCreate(source);
  const result =
    props.source.refs[WHITE_NOISE_KEY];
  const handleClick =
    useNodesSourceNoiseToggle();
  return (
    <>
      {renderUi(
        "sources",
        'noise',
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
