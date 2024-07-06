import type { FC } from "react";
import { IconsOscillator } from "~/components/icons/oscillator";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { useNodesSourceOscillatorCreate } from "~/pages/video/music/synth/nodes/source/oscillator/create";
import { useNodesSourceOscillatorToggle } from "~/pages/video/music/synth/nodes/source/oscillator/toggle";

type TProps = TSourceProps;
export const NodesSourceOscillator: FC<
  TProps
> = (props) => {
  props.source.refs[OSCILLATOR_KEY] =
    useNodesSourceOscillatorCreate(
      props.source
    );
  const result =
    props.source.refs[OSCILLATOR_KEY];
  const handleClick =
    useNodesSourceOscillatorToggle();
  return (
    <>
      {renderUi(
        props,
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
