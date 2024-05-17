import { Player } from "@remotion/player";
import { usePlayerListeners } from "~/hooks/remotion/use-player-listeners";
import { useRemotionPlayerProps } from "~/components/remotion/player/use-props";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import {
  TPicSeriesSchema,
  TPicSeriesProps,
} from "~/components/remotion/pic-series/types";
import { PicSeries } from "~/components/remotion/pic-series";
import { Empty } from "~/components/remotion/pic-series/empty";
import { useLoading } from "~/components/remotion/player/overlays/loading/use-loading";
import { usePoster } from "~/components/remotion/player/overlays/use-poster";

export const RemotionPlayer = () => {
  const props =
    useRemotionPlayerProps();
 const renderPoster = usePoster();
  const renderLoading = useLoading();
  usePlayerListeners();
  console.log(props)
  return (
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
      showPosterWhenEnded 
      component={PicSeries}
      schema={PIC_SERIES_SCHEMA}
      {...props}
    />
  );
};
