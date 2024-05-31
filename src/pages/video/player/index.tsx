import { Helmet } from "react-helmet-async";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { VideoPlayer_Screen } from "~/pages/video/player/_screen";
import { VideoPlayer_Controls } from "~/pages/video/player/_controls";
import { Player_InitContextProvider } from "~/pages/video/player/_context/init";
import { isPlayerInstance } from "~/utils/validation/is/player";
import { Player_ReadyContextProvider } from "~/pages/video/player/_context/ready";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
// import { useLoop } from "~/hooks/sound/koolasuchas/useLoop";
// import { IconsGroup } from "~/components/icons/group";
// import { useSoundContext } from "~/shell/global/sound";
// import { useRef } from "react";

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
  // const { play, stop: stopLoop } =
  //   useLoop();
  // const { stop, start, sound,context } =
  //   useSoundContext();
  // const handleClick = () => {
  //   console.log(sound.recorder.state);
  //   if (
  //     sound.recorder.state ===
  //     "recording"
  //   ) {
  //     console.log("STOP");
  //     stopLoop();
  //     stop();
  //   } else {
  //     play();
  //     start();
  //   }
  // };
  // const mediaElement = useRef(new Audio())
  // const streamSource  = context.createMediaStreamSource(sound.destination.stream);
  // const srcObject = context.createMediaElementSource(mediaElement.current)
  // const src = URL.createObjectURL(srcObject) 
//   const recordedBlob = new Blob(sound.chunks, { type: "video/webm" });
//  const src = URL.createObjectURL(recordedBlob);
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Viewing Room
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        className="fill column-start justify-start overflow-auto"
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
                    {/* <audio src={src} controls />
                    <div
                      className="relative flex-col flex justify-center"
                      style={{
                        ...playerStyle,
                      }}
                    >
                      <button
                        onClick={
                          handleClick
                        }
                      >
                        <IconsGroup />
                      </button>
                    </div> */}
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
