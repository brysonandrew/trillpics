import { useVideoStore } from "src/store";
import { VideoPlayer } from "@/remotion/player";
import { Empty } from "@pages/home/footer/empty";
import { FooterVideo } from "@pages/home/footer/video";
import { Generate } from "@/pages/home/footer/generate";
import { FooterPlayer } from "@/pages/home/footer/player";

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
      <footer className="fixed left-0 bottom-12 right-0 h-0 font-mono z-10">
        {isVideoMode &&
          isPreviewOpen && (
            <div className="fill-screen center text-main-inverted">
              <VideoPlayer />
            </div>
          )}
        <div className="relative row-space container h-0 mx-auto">
          <div className="row gap-4 h-0">
            <FooterVideo />
            {isVideoMode && (
              <FooterPlayer />
            )}
          </div>
          {isVideoMode && (
            <>
              {videoPics.length > 0 && (
                <Generate />
              )}
            </>
          )}
        </div>
      </footer>
    </>
  );
};
