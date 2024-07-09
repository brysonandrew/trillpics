import type {
  FC,
  PropsWithChildren,
} from "react";
import { UGraphNodeWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TWorkletKey } from "~/types/worklets";

type TProps = PropsWithChildren<{
  node: UGraphNodeWithId;
}>;
export const MusicSynthNodesLoaded: FC<
  TProps
> = ({ children, node }) => {
  const { audio, layout } =
    useMusicRefs();

  const key = node.key as TWorkletKey;

  const isLoaded = audio.worklets[key];
  // if (!isLoaded) {
  //   return (
  //     <>
  //       {createPortal(
  //         <div
  //           ref={(instance) => {
  //             if (!instance) return;
  //             layout.update(
  //               "graph",
  //               node.id,
  //               instance
  //             );
  //           }}
  //         ></div>,
  //         document.body
  //       )}
  //     </>
  //   );
  // }
  return (
    <div
      ref={(instance) => {
        if (!instance) return;
        layout.update(
          "graph",
          node.id,
          instance
        );
      }}
    >
      {isLoaded ? children : null}
    </div>
  );
};
