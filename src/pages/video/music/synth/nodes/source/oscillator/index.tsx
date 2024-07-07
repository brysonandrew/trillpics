import type { FC } from "react";
import { IconsOscillator } from "~/components/icons/oscillator";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { useNodesSourceOscillatorCreate } from "~/pages/video/music/synth/nodes/source/oscillator/create";
import { useNodesSourceOscillatorToggle } from "~/pages/video/music/synth/nodes/source/oscillator/toggle";

type TProps = TSourceProps;
export const NodesSourceOscillator: FC<
  TProps
> = (props) => {
  props.source.refs.oscillator =
    useNodesSourceOscillatorCreate(
      props.source
    );
  const result =
    props.source.refs.oscillator;
  const handleClick =
    useNodesSourceOscillatorToggle();
  return (
    <>
      {renderUi(
        "sources",
        'oscillator',
        () => (
          <button
            onClick={() =>
              handleClick(
                props.source,
                result
              )
            }
          >
            <IconsOscillator />
          </button>
        ),
        result.ui
      )}
    </>
  );
};
