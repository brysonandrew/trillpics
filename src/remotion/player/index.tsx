import { Player } from "@remotion/player";
import { usePoster } from "~/remotion/player/ui/use-poster";
import { usePlayerListeners } from "~/remotion/hooks/use-player-listeners";
import { useRemotionPlayerProps } from "~/remotion/player/use-props";
import { Backdrop } from "~/components/backdrop";
import { PIC_SERIES_SCHEMA } from "~/remotion/pic-series/schema";
import {
  TPicSeriesSchema,
  TPicSeriesProps,
} from "~/remotion/pic-series/types";
import { useLoading } from "~/remotion/player/ui/use-loading";
import { PicSeries } from "../pic-series";

export const VideoPlayer = () => {
  const props =
    useRemotionPlayerProps();
  const renderPoster = usePoster();
  const renderLoading = useLoading();
  usePlayerListeners();
  return (
    <>
      <Backdrop />
      <Player<
        TPicSeriesSchema,
        TPicSeriesProps
      >
        spaceKeyToPlayOrPause
        clickToPlay
        doubleClickToFullscreen
        renderPoster={renderPoster}
        renderLoading={renderLoading}
        showPosterWhenPaused
        showPosterWhenUnplayed
        // showPosterWhenEnded
        component={PicSeries}
        schema={PIC_SERIES_SCHEMA}
        {...props}
      />
    </>
  );
};
