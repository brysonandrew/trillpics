import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { useVideoStore } from "src/store";
import { VideoPlayer } from "@/remotion/player";
import { Empty } from "@pages/home/footer/empty";
import { FooterVideo } from "@pages/home/footer/video";
import { Generate } from "@/pages/home/footer/generate";
import { FooterPlayer } from "@/pages/home/footer/player";
import { FooterShow } from "@/pages/home/footer/show";
import { FooterShuffle } from "@/pages/home/footer/shuffle";
import { FooterClear } from "@/pages/home/footer/clear";
import {
  FooterCounter,
  FooterCounterInline,
} from "@/pages/home/footer/counter";
import { Circle } from "@/components/decoration/circle";
export const Footer = () => {
  const {
    isVideoMode,
    isPreviewOpen,
    videoPics,
  } = useVideoStore();

  return (
    <>
      {isVideoMode &&
        videoPics.length === 0 && (
          <Empty />
        )}
      <footer className="fixed left-0 bottom-0 right-0 h-0 font-mono z-10">
        {isVideoMode &&
          isPreviewOpen && (
            <div className="fill-screen center text-main-inverted">
              <VideoPlayer />
            </div>
          )}
        {!isPreviewOpen && (
          <div className="absolute bottom-0 left-0 w-0 h-screen">
            <div className="absolute bottom-1/2 left-0 w-screen h-[1px] bg-transparent">
              <div className="absolute bottom-0 h-0 left-1/2 -translate-1/2 container">
                <div className="absolute -translate-y-1/2 left-0 top-0 w-0">
                  <FooterShuffle />
                </div>
              </div>
              {isVideoMode &&
                videoPics.length >
                  0 && (
                  <div className="absolute bottom-0 left-1/2 h-0 -translate-x-1/2 center">
                    <FooterPlayer />
                  </div>
                )}
            </div>
            {isVideoMode &&
              videoPics.length > 0 && (
                <div className="absolute bottom-1/12 w-screen h-[1px] bg-transparent">
                  <div className="absolute bottom-0 h-0 left-1/2 -translate-1/2 container">
                    <div className="absolute left-0 bottom-0 column-start gap-2">
                      <FooterClear />
                      <FooterShow />

                      <div className="relative h-10 w-10 center">
                        <FooterCounterInline />
                      </div>
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
            <FooterVideo />
            {isVideoMode && (
              <>
                {videoPics.length >
                  0 && <Generate />}
              </>
            )}
          </div>
        </div>
      </footer>
    </>
  );
};
