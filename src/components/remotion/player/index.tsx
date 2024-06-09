import { FC } from "react";
import { Player } from "@remotion/player";
import { useRemotionPlayerProps } from "~/components/remotion/player/use-props";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import { PicSeries } from "~/components/remotion/pic-series";
import { useLoading } from "~/components/remotion/player/overlays/loading/use-loading";
import {
  TPicSeriesProps,
  TPicSeriesSchema,
} from "~/components/remotion/pic-series/types";

export const RemotionPlayer: FC<
  TPicSeriesProps
> = (_inputProps) => {
  const { inputProps, ...props } =
    useRemotionPlayerProps(_inputProps);
  const renderLoading = useLoading();
  return (
    <Player<
      TPicSeriesSchema,
      TPicSeriesProps
    >
      moveToBeginningWhenEnded={false}
      spaceKeyToPlayOrPause
      clickToPlay
      doubleClickToFullscreen
      renderLoading={renderLoading}
      component={PicSeries}
      schema={PIC_SERIES_SCHEMA}
      inputProps={inputProps}
      {...props}
    />
  );
};
