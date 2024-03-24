import { Player } from "@remotion/player";
import { useVideoStore } from "@pages/home/video/store";
import { Backdrop } from "@components/pics/item/pic/Backdrop";
import {
  DIMENSIONS,
  FPS,
} from "./constants";
import { PicSeries } from "./pic-series";
import { useViewport } from "@shell/providers/context/viewport";

export const VideoPlayer = () => {
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
            // ...(viewport.isDimensions
            //   ? ({
            //       position: "fixed",
            //       width: viewport.width,
            //       height:
            //         viewport.height,
            //     } as const)
            //   : ({} as const)),
            backdropFilter:
              "blur(40px) grayscale(100%) brightness(50%)",
            cursor: "zoom-out",
          },
        }}
      />
      {/* <Player
        controls
        component={PicSeries}
        durationInFrames={
          pics.length * FPS
        }
        compositionWidth={
          DIMENSIONS.width
        }
        compositionHeight={
          DIMENSIONS.height
        }
        fps={FPS}
        inputProps={{ pics }}
      /> */}
    </>
  );
};
