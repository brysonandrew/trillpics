import { useVideoStore } from "src/store";
import { VideoPlayer } from "@/remotion/player";
import { Button } from "@pages/home/footer/button";
import { IconsPlay } from "@components/icons/play";
import { Empty } from "@pages/home/footer/empty";
import { FooterVideo } from "@pages/home/footer/video";
import { Circle } from "@components/decoration/circle";
import { IconsBack } from "@components/icons/preview";
import { IconsGenerate } from "@components/icons/generate";
import { FooterView } from "@pages/home/footer/view";
import { trpc } from "@/utils/trpc";

export const Footer = () => {
  const {
    isVideoMode,
    isPreviewOpen,
    togglePreview,
    videoPics,
    fps
  } = useVideoStore();

  const mutation =
    trpc.generate.useMutation<any>({
      input: { pics: videoPics },

    } as any);
  const handleProcess = () => {
    console.log("PROCESS")
    mutation.mutate({
      input: { pics: videoPics },
      fps,
    } as any);
  };

  const handlePreview = () => {
    togglePreview(!isPreviewOpen);
  };
  return (
    <>
      {isVideoMode &&
        videoPics.length === 0 && (
          <Empty />
        )}
      <footer className="fixed left-0 bottom-3 right-0 h-0 font-mono z-10">
        {isVideoMode &&
          isPreviewOpen && (
            <div className="fill-screen center text-main-inverted">
              <VideoPlayer />
            </div>
          )}
        <div className="relative row gap-4 container -translate-y-full bottom-4 mx-auto">
          <Circle isGlow={isVideoMode}>
            <FooterVideo />
          </Circle>
          {isVideoMode && (
            <>
              {videoPics.length > 0 && (
                <div className="row-space grow h-0">
                  <div className="column-reverse items-start justify-center gap-2 h-20">
                    <Button
                      title="View video preview"
                      onClick={
                        handlePreview
                      }
                      Icon={
                        isPreviewOpen
                          ? IconsBack
                          : IconsPlay
                      }
                    >
                      {isPreviewOpen ? (
                        <>Back</>
                      ) : (
                        <>Preview</>
                      )}
                    </Button>
                    {!isPreviewOpen && (
                      <FooterView />
                    )}
                  </div>
                  <Button
                    title="Generate video"
                    onClick={
                      handleProcess
                    }
                    Icon={IconsGenerate}
                  >
                    Generate
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </footer>
    </>
  );
};
