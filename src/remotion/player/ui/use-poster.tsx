import { Button } from "./button";
import { Loading } from "@brysonandrew/loading";
import { IconsPlay, IconsPlayLarge } from "~/components/icons/playback/play";
import {
  RenderPoster
} from "@remotion/player";
import { useCallback } from "react";

export const usePoster = () => {
  const renderPoster: RenderPoster =
    useCallback(({ isBuffering }) => {
      if (isBuffering) {
        return <Loading />;
      }
      return (
        <Button Icon={IconsPlayLarge}>
          Play
        </Button>
      );
    }, []);
  return renderPoster
};
