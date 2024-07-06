import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import { TDivMutableRef } from "~/types/elements";
import { TWorkletKey } from "~/types/worklets";

const handleAddWhenLoaded = (
  key: string,
  id: string,
  container: TDivMutableRef
) => {
  switch (key) {
    case KARPLUS_KEY:
    case WHITE_NOISE_KEY:
      const element =
        document.getElementById(id);
      if (element) {
        if (
          container &&
          container.current !== null
        ) {
          element.style.opacity = "1";
          container.current.appendChild(
            element
          );
        } else {
          element.style.opacity = "0";
          document.body.appendChild(
            element
          );
        }
      }
    default:
      return null;
  }
};

export const useLoadEffect = () => {
  const {
    audio: { graph },
    layout,
  } = useMusicRefs();

  const handler = (
    name: TWorkletKey
  ) => {
    graph.sources.forEach((source) => {
      if (source.key === name) {
        handleAddWhenLoaded(
          source.key,
          source.id,
          layout.graph.sources
        );
      }
      source.nodes.forEach((node) => {
        if (node.key === name) {
          handleAddWhenLoaded(
            node.key,
            node.id,
            layout.graph.nodes
          );
        }
      });
    });
  };
  return handler;
};
