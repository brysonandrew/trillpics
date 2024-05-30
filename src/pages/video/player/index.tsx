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
  const paddingY = screen.container.top;
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
          paddingLeft:
            screen.container.left +
            s.m15,
          paddingBottom: paddingY,
          gap: s.m,
        }}
      >
        <Player_InitContextProvider>
          {(playerInstance) => {
            return (
              <>
                <VideoPlayer_Screen />
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
                    <>
                      <VideoPlayer_Controls />
                    </>
                  </Player_ReadyContextProvider>
                )}
              </>
            );
            return <div>no player</div>;
          }}
        </Player_InitContextProvider>
      </div>
      <div
        style={{ height: paddingY }}
      />
    </>
  );
};
