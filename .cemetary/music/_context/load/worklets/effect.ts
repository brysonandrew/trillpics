import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import {
  TGraphNodeWithId,
  TGraphSourceWithId,
} from "~/pages/video/music/_context/refs/audio/graph/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import { TInputRefsGraph } from "~/pages/video/music/_context/refs/layout/types";
import { TWorkletKey } from "~/types/worklets";

const handleAddWhenLoaded = (
  node:
    | TGraphSourceWithId
    | TGraphNodeWithId,
  graph: TInputRefsGraph
) => {
  switch (node.key) {
    case KARPLUS_KEY:
    case WHITE_NOISE_KEY:
      
      const element = graph[node.id];

      if (element) {
        // element.current.style.opacity =
        //   "1";
        // console.log("el", node, graph);
        // if (
        //   container &&
        //   container.current !== null
        // ) {
        //   console.log(key, "ADDED ");
        //   container.current.appendChild(
        //     element
        //   );
        // } else {
        //   console.log(
        //     key,
        //     "ADDED no el ",
        //     element
        //   );

        // element.style.opacity = "0";
        // document.body.appendChild(
        //   element
        // );
        // }
        return;
      }
      console.log("no el", node, graph);
    default:
      return null;
  }
};

export const useLoadEffect = () => {
  const {
    audio,
    layout,
  } = useMusicRefs();

  const handler = (
    name: TWorkletKey
  ) => {
    audio.graph.sources.forEach((source) => {
      if (source.key === name) {
        // const processor =
        // audio.noises.connect(
        //   WHITE_NOISE_KEY,
        //   audio.gains.midis.preamp,
        //   source.options as TNoiseOptions
        // );
        // audio.gains.midis.preamp.connect(audio.gains.midis.master)
  
        handleAddWhenLoaded(
          source,
          layout.graph
        );
      }
      source.nodes.forEach((node) => {
        if (node.key === name) {
          
          handleAddWhenLoaded(
            node,
            layout.graph
          );
        }
      });
    });
  };
  return handler;
};
