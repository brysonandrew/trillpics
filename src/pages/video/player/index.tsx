import { useMemo } from "react";
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
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { useVideoPlayerStyle } from "~/pages/video/player/style";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer = () => {
  const {
    playerStyle,
    screenHeight,
    y,
    gap,
  } = useVideoPlayerStyle();
  useAddRandomEffect();
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Viewing Room
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        className="fill column-start justify-center overflow-auto"
        style={{
          paddingTop: y,
          paddingBottom: y,
          gap,
        }}
      >
        <Player_InitContextProvider>
          {(playerInstance) => {
            return (
              <>
                <div
                  className="relative"
                  style={{
                    ...playerStyle,
                    height:
                      screenHeight,
                  }}
                >
                  <VideoPlayer_Screen />
                </div>
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
                        ...playerStyle,
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
      <div style={{ height: y }} />
    </>
  );
};
