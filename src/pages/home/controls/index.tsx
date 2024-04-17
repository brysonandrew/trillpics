import { FC } from "react";
import { motion } from "framer-motion";
import { useVideoStore } from "src/store";
import { VideoPlayer } from "@/remotion/player";
import { Empty } from "@/pages/home/controls/empty";
import { ControlsVideo } from "@/pages/home/controls/video";
import { Generate } from "@/pages/home/controls/generate/generate";
import { ControlsPlayer } from "@/pages/home/controls/player";
import { ControlsShow } from "@/pages/home/controls/show";
import { resolvePresence } from "@brysonandrew/animation";
import { ControlsClear } from "@/pages/home/controls/clear";
import { ControlsCounterInline } from "@/pages/home/controls/counter";
import { TCooldownProps } from "@/pages/home/header/config";
import { Background1 } from "@/components/decoration/background-1";

type TProps = TCooldownProps;
export const Controls: FC<TProps> = ({
  isCooldown,
}) => {
  const {
    isVideoMode,
    isPreviewOpen,
    videoPics,
  } = useVideoStore();
  const isVideoPicsCount =
    videoPics.length > 0;
  return (
    <>
      {isVideoPicsCount ? (
        <motion.div
          key="CONTROLS"
          {...resolvePresence(
            { opacity: 0 },
            {
              opacity: isCooldown
                ? 0.2
                : 1,
            }
          )}
          className="fixed left-0 bottom-0 right-0 h-0 font-display-led z-10"
        >
          {isVideoMode &&
            isPreviewOpen && (
              <div className="fill-screen center text-main-inverted">
                <VideoPlayer />
              </div>
            )}
          {!isPreviewOpen && (
            <div className="absolute bottom-0 left-0 w-0 h-screen">
              {/* <div className="absolute bottom-1/2 left-0 w-screen h-[1px] bg-transparent">
                <div className="absolute bottom-0 h-0 left-1/2 -translate-1/2 container">
                  <div className="absolute -translate-y-1/2 left-0 top-0 w-0">
                    <ControlsShuffle />
                  </div>
                </div>
              </div> */}
              {isVideoMode &&
                videoPics.length >
                  0 && (
                  <div className="absolute bottom-1/12 w-screen h-0 bg-transparent">
                    <div className="absolute bottom-0 h-0 left-1/2 -translate-x-1/2 container">
                      <div className="absolute left-0 bottom-0 column-start gap-2">
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

          <div className="relative row-space container h-0 mx-auto">
            <div className="relative bottom-8 row-space w-full h-0">
           
              <ControlsVideo
                inlineCounter={
                  <div className="absolute left-0 bottom-6 w-10 h-10">
                    <ControlsCounterInline />

                    
                  </div>

                }
              />
              {isVideoMode && (
                <>
                  {videoPics.length >
                    0 && <Generate />}
                </>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <>{isVideoMode && <Empty />}</>
      )}
    </>
  );
};
