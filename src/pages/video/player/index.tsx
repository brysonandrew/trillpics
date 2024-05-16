import { useOutletContext } from "react-router";
import { PlayerFooter } from "~/pages/video/player/_footer";
import { PlayerFooterButtonsExit } from "~/pages/video/player/_footer/exit";
import { PlayerFooterButtonsFullscreen } from "~/pages/video/player/_footer/fullscreen";
import { useVideoPlayerAmbient } from "~/pages/video/player/_ambient";
import { PlayerHeader } from "~/pages/video/player/_header";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { createPortal } from "react-dom";
import { useContextGrid } from "~/context";
import { VideoFooterLeft } from "~/pages/video/_root/left";
import { VideoFooterNav } from "~/pages/video/_common/footer/nav";

export const VideoPlayer = () => {
  const {
    isPlayerInstance,
    isPlaying,
  } = useVideoPlayerAmbient();
  const { footerValue } =
    useContextGrid();
  return (
    <>
      <PicBackdrop />
      {/* <RemotionPlayer /> */}
      <div>
        <PlayerHeader
          isPlayerInstance={
            isPlayerInstance
          }
        />
      </div>
      <>
        <>
          <div className="absolute left-0 bottom-0 row-space w-full">
            <PlayerFooterButtonsExit />
            {isPlayerInstance && (
              <PlayerFooterButtonsFullscreen />
            )}
          </div>
        </>
        <PlayerFooter />
      </>
      <>
        {footerValue &&
          createPortal(
            <>
              <VideoFooterNav />
              <VideoFooterLeft />
            </>,
            footerValue
          )}
      </>
    </>
  );
};
