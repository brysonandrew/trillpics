import type { FC } from "react";
import { createPortal } from "react-dom";
import { IconsWhiteNoise } from "~/components/icons/white-noise";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { useNodesSourceNoiseCreate } from "~/pages/video/music/synth/nodes/source/noise/create";
import { useNodesSourceNoiseToggle } from "~/pages/video/music/synth/nodes/source/noise/toggle";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceProps;
export const NodesSourceNoiseTrigger: FC<
  TProps
> = (props) => {
  const { source, containerRef } =
    props;
  const result =
    useNodesSourceNoiseCreate(source);
  source.refs["white-noise"] = result;
  const handleClick =
    useNodesSourceNoiseToggle();
  return (
    <>
      <>
        {renderUi(
          props,
          () => (
            <button
              onClick={() =>
                handleClick(source)
              }
            >
              <IconsWhiteNoise />
            </button>
          ),
          result.ui,

        )}
      </>
      <>
        {source.refs["white-noise"]
          ? containerRef.current
            ? createPortal(
                source.refs[
                  "white-noise"
                ].ui,
                containerRef.current
              )
            : source.refs["white-noise"]
                .ui
          : null}
      </>
    </>
  );
};
