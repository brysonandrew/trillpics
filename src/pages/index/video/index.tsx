import { Player } from "@remotion/player";
import { registerRoot } from "remotion";
import { useVideoStore } from "@pages/index/video/store";
import { useViewport } from "@shell/providers/context/viewport";
import { resolveViewportSelfCenter } from "@components/images/image/resolveViewportSelfCenter";
import { useImageDimensions } from "@hooks/image/useImageDimensions";
import { Backdrop } from "@components/images/item/image/Backdrop";
import { TDimensionsReady } from "@t/measure";
import { DIMENSIONS } from "./constants";
// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4
import { Root } from "./root";

registerRoot(Root);

import { PicSeries } from "./pic-series";

export const Video = () => {
  const viewport = useViewport();

  const {
    videoPics: pics,
    togglePreview,
  } = useVideoStore();
  if (pics.length === 0)
    return (
      <div className="row gap-2 px-2 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 3h2v18H3zm16 0H5v2h14v14H5v2h16V3zm-8 6h2V7h-2zm2 8h-2v-6h2z"
          />
        </svg>
        Please select some pics
      </div>
    );
  const resolveBoxDimensions = (
    dimensionsReady: TDimensionsReady
  ) => ({
    ...dimensionsReady,
    height:
      dimensionsReady.height - 160,
  });
  const dimensions = useImageDimensions(
    {
      image: DIMENSIONS,
      box: viewport.isDimensions
        ? resolveBoxDimensions(viewport)
        : DIMENSIONS,
    }
  );
  const style =
    viewport.isDimensions &&
    dimensions.isDimensions
      ? resolveViewportSelfCenter(
          resolveBoxDimensions(
            viewport
          ),
          dimensions
        )
      : null;
  if (!style) return null;
  return (
    <>
      <Backdrop
        isOpen
        backdropProps={{
          onClick: () =>
            togglePreview(false),
          className:
            "bg-black-04 inset-0 z-60 fade-in-animation zoom-out",
          style: {
            zIndex: 0,
            ...(viewport.isDimensions
              ? ({
                  position: "fixed",
                  width: viewport.width,
                  height:
                    viewport.height,
                } as const)
              : ({} as const)),
            backdropFilter:
              "blur(40px) grayscale(100%) brightness(50%)",
            cursor: "zoom-out",
          },
        }}
      />
      <Player
        loop
        clickToPlay
        doubleClickToFullscreen
        controls
        component={PicSeries}
        durationInFrames={pics.length}
        compositionWidth={style.width}
        compositionHeight={style.height}
        fps={1}
        inputProps={{ pics }}
      />
    </>
  );
};
