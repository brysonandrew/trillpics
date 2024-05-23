import { Player } from "@remotion/player";
import { usePlayerListeners } from "~/hooks/remotion/use-player-listeners";
import { useRemotionPlayerProps } from "~/components/remotion/player/use-props";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import { PicSeries } from "~/components/remotion/pic-series";
import { useLoading } from "~/components/remotion/player/overlays/loading/use-loading";
import { TPicSeriesSchema, TPicSeriesProps } from "~/components/remotion/pic-series/types";

export const RemotionPlayer = () => {
  const props =
    useRemotionPlayerProps();
  const renderLoading = useLoading();
  usePlayerListeners();
  return (
    <Player<
      TPicSeriesSchema,
      TPicSeriesProps
    >
      spaceKeyToPlayOrPause
      clickToPlay
      doubleClickToFullscreen
      renderLoading={renderLoading}
      component={PicSeries}
      schema={PIC_SERIES_SCHEMA}
      {...props}
    />
  );
};
