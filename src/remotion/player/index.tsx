import { useRef, useState } from "react";
import { Player } from "@remotion/player";
import { useVideoStore } from "src/store";
import { useViewport } from "@shell/providers/context/viewport";
import { Empty } from "@pages/home/pics/Empty";
import { PicSeries } from "../pic-series/series";
import { usePoster } from "@/remotion/player/ui/poster";
import { usePlayerListeners } from "@/hooks/usePlayerListeners";
import { useRemotionPlayerProps } from "@/remotion/player/use-props";
import { Backdrop } from "@/components/backdrop";

export const VideoPlayer = () => {
  const isFirstRef = useRef(true)
  const [isPlaying, setPlaying] =
    useState(false);
    const props = useRemotionPlayerProps();
  const viewport = useViewport();
  const {
    videoPics: pics,
    togglePreview,
  } = useVideoStore();
  const {renderPoster} = usePoster();

  usePlayerListeners();

  if (pics.length === 0)
    return <Empty />;
  return (
    <>
      <Backdrop
        isOpen
        backdropProps={{
          onClick: () =>
            togglePreview(false),
          className:
            "inset-0 z-60 fade-in-animation zoom-out",
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
              "blur(40px) grayscale(100%)",
            cursor: "zoom-out",
          },
        }}
      />
      <Player
        controls
        spaceKeyToPlayOrPause
        hideControlsWhenPointerDoesntMove
        moveToBeginningWhenEnded
      //   renderPlayPauseButton={
      //     (props) => {
      //     // if (playing !== isPlaying) {
      //     //   if (playing === true) {
      //     //     isFirstRef.current = false;
      //     //   }
      //     //   setPlaying(Boolean(playing));
      //     // }
      //     return <PlayButton isFirst={isFirstRef.current} {...props} />
      //   }
      // }
        renderPoster={renderPoster}
        showPosterWhenPaused
        showPosterWhenUnplayed
        showPosterWhenEnded
        component={PicSeries}
        {...props}
      />

    </>
  );
};
