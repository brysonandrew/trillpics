import { useVideoStore } from "src/store";
import { VideoPlayer } from "@pages/gallery/video/player";
import { Button } from "@pages/gallery/footer/button";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID } from "@components/gradients/linear-gradient-blue-pink-yellow-svg";
import { Background } from "@components/decoration/background";
import { GRADIENT_BLUE_PINK_YELLOW, TEXT_GRADIENT } from "@constants/css/gradient";

export const Footer = () => {
  const {
    isVideoMode,
    isPreviewOpen,
    togglePreview,
    videoPics
  } = useVideoStore();
  const handleProcess = () => {
    console.log("PROCESS");
  };
  const handlePreview = () => {
    togglePreview(!isPreviewOpen);
  };
  return (
    <>
      {isVideoMode && (
        <>
          {isPreviewOpen && (
            <div className="fill-screen center text-main-inverted">
              <VideoPlayer />
            </div>
          )}
          {videoPics.length > 0 ? (
            <footer className="row-space w-container mx-auto fixed left-0 bottom-4 right-0 h-20 font-mono z-10">
            <Button
              title="View video preview"
              onClick={handlePreview}
            >
              {isPreviewOpen ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 22 22"
                  >
                    <path
                      fill={resolveUrlId(
                        LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
                      )}
                      d="M5 12v-2h1V9h1V8h1V7h1V6h2v2h-1v1H9v1h9v2H9v1h1v1h1v2H9v-1H8v-1H7v-1H6v-1"
                    />
                  </svg>
                  Back
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill={resolveUrlId(
                        LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
                      )}
                      d="M20 3H2v14h8v2H8v2h8v-2h-2v-2h8V3zm-6 12H4V5h16v10z"
                    />
                  </svg>
                  Preview
                </>
              )}
            </Button>
            <Button
              title="Generate video"
              onClick={handleProcess}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
              >
                <path
                  fill={resolveUrlId(
                    LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
                  )}
                  d="M7 7h4v4H7zm-2 6v-2h2v2zm0 0v4H1v-4zm8 0h-2v-2h2zm4 0h-4v4h4zm2-2v2h-2v-2zm0 0h4V7h-4z"
                />
              </svg>
              Generate
            </Button>
          </footer>
          ) : (
            <div className="fixed left-1/2 -translate-x-1/2 bottom-4 text-4xl px-4 z-10 char-gap-4">
              <Background/>
              <div className="relative" style={TEXT_GRADIENT}>Please select some images</div></div>
          )}
          
        </>
      )}
    </>
  );
};
