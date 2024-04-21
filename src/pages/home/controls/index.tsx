import { FC } from "react";
import { motion } from "framer-motion";
import { useVideoStore } from "src/store";
import { VideoPlayer } from "~/remotion/player";
import { ControlsEmpty } from "~/pages/home/controls/empty";
import { ControlsVideo } from "~/pages/home/controls/video";
import { Generate } from "~/pages/home/controls/generate/generate";
import { ControlsPlayer } from "~/pages/home/controls/player";
import { ControlsShow } from "~/pages/home/controls/show";
import { resolvePresence } from "@brysonandrew/motion-core";
import { ControlsClear } from "~/pages/home/controls/clear";
import { ControlsCounterInline } from "~/pages/home/controls/counter";
import { TCooldownProps } from "~/pages/home/header/config";
import { PlayerPlayback } from "~/remotion/player/playback";
import { ControlsFullscreen } from "~/pages/home/controls/fullscreen";
import { PlaybackProgressSeeker } from "~/remotion/player/playback/progress/seeker";

type TProps = TCooldownProps;
export const Controls: FC<TProps> = ({
  isCooldown,
}) => {
  const {
    isVideoMode,
    isPlayerOpen,
    videoPics,
  } = useVideoStore();
  const isVideoPicsCount =
    videoPics.length > 0;
  return (
    <>
      {isVideoPicsCount ? (
        <motion.div
          key="CONTROLS"
          // {...resolvePresence(
          //   { opacity: 0 },
          //   {
          //     opacity: 1,
          //   }
          // )}
          // style={{
          //  ...MOTION_BLUR_FILTER_PROPS,
          // }}
          className="fixed left-0 bottom-0 right-0 h-0 z-50"
        >
          {isVideoMode &&
            isPlayerOpen && (
              <div className="fill-screen center text-main-inverted">
                <VideoPlayer />
                <div className="absolute row-space container top-4 left-1/2 -translate-x-1/2">
                  <PlayerPlayback />
                  <Generate />
                </div>
                <div className="absolute bottom-8 left-0 w-full h-5">
                  <PlaybackProgressSeeker />
                </div>
              </div>
            )}
          {!isPlayerOpen && (
            <div className="absolute bottom-0 left-0 w-0 h-screen">
              {/* <div className="absolute bottom-1/2 left-0 w-screen h-[1px] bg-transparent">
                <div className="absolute bottom-0 h-0 left-1/2 -translate-1/2 container">
                  <div className="absolute -translate-y-1/2 left-0 top-0 w-0">
                    <ControlsShuffle />
                  </div>
                </div>
              </div> */}
              {isVideoMode &&
                isVideoPicsCount && (
                  <div className="absolute bottom-25 w-screen h-0 bg-transparent">
                    <div className="absolute bottom-0 h-0 left-1/2 -translate-x-1/2 container">
                      <div className="absolute left-0 bottom-0 column-start gap-4">
                        <ControlsClear />
                        <ControlsShow />
                        <ControlsPlayer />
                        <div className="relative h-10 w-10 center"></div>
                        {/* <div className="absolute w-0 h-0 left-0 bottom-3/4">
                      <div className="absolute bottom-8 left-0 h-0 center">
                      </div>
                      <div className="absolute top-8 left-0 center">
                      </div>
                    </div> */}
                      </div>
                    </div>
                  </div>
                )}
            </div>
          )}
        </motion.div>
      ) : (
        <>
          {isVideoMode && (
            <ControlsEmpty />
          )}
        </>
      )}
      <div
        // {...resolvePresence(
        //   { opacity: 0 },
        //   {
        //     opacity: 1,
        //   }
        // )}
        className="fixed left-1/2 -translate-1/2 bottom-0 container h-0 z-50"
        // style={{
        //  ...MOTION_BLUR_FILTER_PROPS,
        // }}
      >
        <div className="relative bottom-15 row-space w-full h-0">
          <ControlsVideo
            inlineCounter={
              <div className="absolute left-0 bottom-6 w-10 h-10">
                <ControlsCounterInline />
              </div>
            }
          />
          {isPlayerOpen && (
            <ControlsFullscreen />
          )}
        </div>
      </div>
    </>
  );
};
