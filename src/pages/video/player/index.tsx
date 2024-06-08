import { Helmet } from "react-helmet-async";
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
        className="fill column-start justify-center lg:justify-start overflow-auto"
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



// <motion.div
// layout
// className="absolute row-space"
// style={{
//   height: 0,
//   width:
//     container.width + s.m,
//   bottom: s.m2 - s.m0125,
//   x: dragger.x05,
//   left: 0,
//   y: dragger.y,
// }}
// >
// <div
//   style={{
//     width: s.m,
//   }}
// />
// <ControlsPlayer />
// </motion.div>