import { useRef, useState } from "react";
import { Player } from "@remotion/player";
import { useVideoStore } from "src/store";
import { Backdrop } from "@components/pics/item/pic/Backdrop";
import { useViewport } from "@shell/providers/context/viewport";
import { PlayButton } from "@video/player/play-button";
import { Empty } from "@pages/home/pics/Empty";
import {
  DIMENSIONS,
  FPS,
} from "../constants";
import { PicSeries } from "../composition";

export const VideoPlayer = () => {
  const isFirstRef = useRef(true)
  const [isPlaying, setPlaying] =
    useState(false);
  const viewport = useViewport();
  const {
    videoPics: pics,
    togglePreview,
  } = useVideoStore();
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
        renderPlayPauseButton={(props) => {
          // if (playing !== isPlaying) {
          //   if (playing === true) {
          //     isFirstRef.current = false;
          //   }
          //   setPlaying(Boolean(playing));
          // }
          return <PlayButton isFirst={isFirstRef.current} {...props} />
        }}
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
      />

    </>
  );
};
