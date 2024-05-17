import { useVideoPlayerAmbient } from "~/pages/video/player/_ambient";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { useContextGrid } from "~/context";
import { createPortal } from "react-dom";
import { PlayerHeader } from "~/pages/video/player/_header";
import { PlayerFooter } from "~/pages/video/player/_footer";

export const VideoPlayer = () => {
  const { isPlayerInstance } =
    useVideoPlayerAmbient();
  const { headerValue } =
    useContextGrid();
  console.log(
    isPlayerInstance,
    headerValue
  );
  return (
    <>
      {headerValue &&
        createPortal(
          <div className="fixed inset-0 z-50">
            <PicBackdrop />
          
            <RemotionPlayer />
            <PlayerHeader
              isPlayerInstance={
                isPlayerInstance
              }
            />
            <PlayerFooter />
          </div>,
          headerValue
        )}
    </>
  );
};
