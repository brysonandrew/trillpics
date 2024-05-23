import { useCallback } from "react";
import { Loading } from "@brysonandrew/loading";
import { RenderPoster } from "@remotion/player";
import { OverlaysContent } from "~/components/remotion/player/overlays/content";
import { IconsPlayLarge } from "~/components/icons/playback/play";

export const OVERLAYS_POSTER_PROPS = {
  children: `Pics are random, go back to
  the gallery if you would
  like to choose your own.`,
  button: {
    title: "Play video",
    children: "Play",
    Icon: IconsPlayLarge,
  },
};

export const usePoster = () => {
  const renderPoster: RenderPoster =
    useCallback(({ isBuffering }) => {
      if (isBuffering) {
        return <Loading />;
      }
      return (
        <OverlaysContent
          {...OVERLAYS_POSTER_PROPS}
        />
      );
    }, []);
  return renderPoster;
};
