import { useVideoStore } from "src/store";
import { VideoPlayer } from "@/remotion/player";
import { Button } from "@pages/home/footer/button";
import { IconsPlay } from "@components/icons/play";
import { Empty } from "@pages/home/footer/empty";
import { FooterVideo } from "@pages/home/footer/video";
import { Circle } from "@components/decoration/circle";
import { IconsBack } from "@/components/icons/back";
import { FooterView } from "@pages/home/footer/view";
import { trpc } from "@/utils/trpc";
import { TGenerateConfig } from "@/server/remotion/generate";
import { downloadMedia } from "@/pages/home/footer/download-media";
import { Generate } from "@/pages/home/footer/generate";

export const Footer = () => {
  const {
    isVideoMode,
    isPreviewOpen,
    togglePreview,
    videoPics,
    fps,
  } = useVideoStore();
  const config: TGenerateConfig = {
    input: { pics: videoPics },
    fps,
  };
  const mutation =
    trpc.generate.useMutation();
  const handleGenerate = async () => {
    const result =
      await mutation.mutateAsync(
        config as any
      );
    const arr = new Uint8Array(
      result.buffer?.data ?? []
    );
    const blob = new Blob([arr]);
    await downloadMedia(blob);
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
      <footer className="fixed left-0 bottom-6 right-0 h-0 font-mono z-10">
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
                  <div className="column-reverse items-start justify-center gap-2 h-32">
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
                  <Generate />
                </div>
              )}
            </>
          )}
        </div>
      </footer>
    </>
  );
};
