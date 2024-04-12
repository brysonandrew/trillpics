import { useVideoStore } from "src/store";
import { VideoPlayer } from "@video/player";
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
  // const handler = useRender()
  const {
    isVideoMode,
    isPreviewOpen,
    togglePreview,
    videoPics,
  } = useVideoStore();

  const mutation =
    trpc.generate.useMutation<any>({
      input: { pics: videoPics },
    } as any);
  const handleProcess = () => {
    mutation.mutate({
      input: { pics: videoPics },
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
        <div className="relative row gap-4 container -translate-y-full mx-auto">
          <Circle isGlow={isVideoMode}>
            <FooterVideo />
          </Circle>
          {isVideoMode && (
            <>
              {videoPics.length > 0 && (
                <div className="row-space grow h-20">
                  <div className="column-reverse items-start gap-2 h-14">
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
