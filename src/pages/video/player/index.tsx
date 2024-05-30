import { Helmet } from "react-helmet-async";
import { boxSize } from "~/constants/box/size";
import { FULLSCREEN_Z } from "~/constants/dom";
import { useContextReady } from "~/shell/ready/context";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { VideoPlayer_Screen } from "~/pages/video/player/_screen";
import { VideoPlayer_Controls } from "~/pages/video/player/_controls";
import { Player_InitContextProvider } from "~/pages/video/player/_context/init";
import { isPlayerInstance } from "~/utils/validation/is/player";
import { Player_ReadyContextProvider } from "~/pages/video/player/_context/ready";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer = () => {
  const { screen } = useContextReady();
  const s = boxSize();
  const container = screen.container;
  const left = container.isMobile
    ? s.m05
    : container.isTablet
    ? s.m05
    : s.m15 + screen.container.left;
  const width =
    container.width +
    (container.isMobile
      ? s.m
      : container.isTablet
      ? s.m
      : -s.m25);
  const paddingY = container.isMobile
    ? screen.container.top
    : screen.container.top;
  // const container = screen.container;
  // const left = container.isMobile
  //   ? -s.m15
  //   : container.isTablet
  //   ? -s.m
  //   : 0;
  // const width =
  //   container.width -
  //   (container.isMobile
  //     ? 0
  //     : container.isTablet
  //     ? s.m05
  //     : s.m3);
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Viewing Room
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        className="fill overflow-auto"
        style={{
          zIndex: 0,
          paddingTop: paddingY + s.m15,
          // paddingLeft,
          paddingBottom: paddingY,
          gap: s.m,
        }}
      >
        <Player_InitContextProvider>
          {(playerInstance) => {
            return (
              <>
                <div
                  className="relative"
                  style={{
                    gap: s.m05,
                    left,
                    width,
                    height:
                      width * (9 / 16),
                  }}
                >
                  <VideoPlayer_Screen />
                </div>
                <div
                  style={{
                    height: s.m05,
                  }}
                />
                {isPlayerInstance(
                  playerInstance
                ) && (
                  <Player_ReadyContextProvider
                    playerInstance={
                      playerInstance
                    }
                  >
                    <div
                      className="relative flex-col flex justify-center"
                      style={{
                        left,
                        gap: s.m05,
                        width,
                      }}
                    >
                      <VideoPlayer_Controls />
                    </div>
                  </Player_ReadyContextProvider>
                )}
              </>
            );
          }}
        </Player_InitContextProvider>
      </div>
      <div
        style={{ height: paddingY }}
      />
    </>
  );
};
