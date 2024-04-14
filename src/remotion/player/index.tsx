import {
  Fragment,
  useRef,
  useState,
} from "react";
import { Player } from "@remotion/player";
import { useVideoStore } from "src/store";
import { useViewport } from "@shell/providers/context/viewport";
import { Empty } from "@pages/home/pics/Empty";
import { usePoster } from "@/remotion/player/ui/poster";
import { usePlayerListeners } from "@/hooks/usePlayerListeners";
import { useRemotionPlayerProps } from "@/remotion/player/use-props";
import { PicSeries } from "../pic-series/series";

export const VideoPlayer = () => {
  const isFirstRef = useRef(true);
  const [isPlaying, setPlaying] =
    useState(false);
  const props =
    useRemotionPlayerProps();
  const viewport = useViewport();
  const {
    videoPics: pics,
    isPreviewOpen,
    togglePreview,
  } = useVideoStore();
  const { renderPoster } = usePoster();

  usePlayerListeners();

  if (pics.length === 0)
    return <Empty />;
  return (
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
  );
};
