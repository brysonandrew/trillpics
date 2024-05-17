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
      // {/* durationInFrames={24}
      // fps={24} */}
      // {/* inputProps={{pics:['0'],seconds:1,count:1}} */}
      component={PicSeries}
      schema={PIC_SERIES_SCHEMA}
      {...props}
    />
  );
};
{/* // component={Empty}
        // durationInFrames={120}
        // compositionWidth={1920}
        // compositionHeight={1080}
        // fps={30}
         compositionWidth={100}
         compositionHeight={100}
      // spaceKeyToPlayOrPause
      // clickToPlay
      // doubleClickToFullscreen
      // renderPoster={renderPoster}
      // renderLoading={renderLoading}
      // showPosterWhenPaused
      // showPosterWhenUnplayed
      // showPosterWhenEnded */}