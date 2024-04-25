import { GradientsZebraBackground } from "~/components/gradients/zebra/background";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { PlayerFooter } from "~/pages/video-player/footer";
import { RemotionPlayer } from "~/components/remotion/player";
import { PlayerHeader } from "~/pages/video-player/header";
import { PlayerFooterButtonsExit } from "~/pages/video-player/footer/exit";
import { PlayerFooterButtonsFullscreen } from "~/pages/video-player/footer/fullscreen";

export const VideoPlayer = () => {
  const {
    Header,
    Footer,
    Screen,
  } =
    useOutletContext<TOutletContext>();
  return (
    <>
      <GradientsZebraBackground />
      <div className="fill bg-black-06 backdrop-blur-lg" />
      <Screen>
        <RemotionPlayer />
      </Screen>
      <Header>
        <PlayerHeader />
      </Header>
      <Footer>
        <>
          <div className="absolute left-0 bottom-0 row-space w-full">
            <PlayerFooterButtonsExit />
            <PlayerFooterButtonsFullscreen />
          </div>
        </>
        <PlayerFooter />
      </Footer>
    </>
  );
};
