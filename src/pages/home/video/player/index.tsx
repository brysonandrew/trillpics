import { useRef, useState } from "react";
import { Player } from "@remotion/player";
import { useVideoStore } from "src/store";
import { Backdrop } from "@components/pics/item/pic/Backdrop";
import { useViewport } from "@shell/providers/context/viewport";
import { PlayButton } from "@pages/home/video/player/play-button";
import { Empty } from "@pages/gallery/list/Empty";
import {
  DIMENSIONS,
  FPS,
} from "../constants";
import { PicSeries } from "../pic-series";

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
        renderPlayPauseButton={({
          playing,
        }) => {
          if (playing !== isPlaying) {
            if (playing === true) {
              isFirstRef.current = false;
            }
            setPlaying(Boolean(playing));
          }
          return null;
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
      {isPlaying ? null : (
        <PlayButton isFirst={isFirstRef.current} />
      )}
    </>
  );
};
