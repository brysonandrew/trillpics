import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { PlayerFooter } from "~/pages/video/player/_footer";
import { PlayerFooterButtonsExit } from "~/pages/video/player/_footer/exit";
import { PlayerFooterButtonsFullscreen } from "~/pages/video/player/_footer/fullscreen";
import { useVideoPlayerAmbient } from "~/pages/video/player/_ambient";
import { PlayerHeader } from "~/pages/video/player/_header";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";

export const VideoPlayer = () => {
  const {  Footer, Screen } =
    useOutletContext<TOutletContext>();
  const {
    isPlayerInstance,
    isPlaying,
  } = useVideoPlayerAmbient();
  return (
    <>
      <PicBackdrop/>
      <Screen>
        {/* <RemotionPlayer /> */}
      </Screen>
      <div>
        <PlayerHeader
          isPlayerInstance={
            isPlayerInstance
          }
        />
      </div>
      <Footer>
        <>
          <div className="absolute left-0 bottom-0 row-space w-full">
            <PlayerFooterButtonsExit />
            {isPlayerInstance && (
              <PlayerFooterButtonsFullscreen />
            )}
          </div>
        </>
        <PlayerFooter />
      </Footer>
    </>
  );
};
