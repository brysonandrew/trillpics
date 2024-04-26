import { useCallback } from "react";
import { Loading } from "@brysonandrew/loading";
import {
  IconsPlay,
  IconsPlayLarge,
} from "~/components/icons/playback/play";
import { RenderPoster } from "@remotion/player";
import { useVideoStore } from "~/store";
import { useShallow } from "zustand/react/shallow";
import { Button } from "./button";
import { Background } from "@brysonandrew/interactive";
import { Background1 } from "~/components/decoration/background/1";

export const usePoster = () => {
  const { isVideoPics } = useVideoStore(
    useShallow(({ isVideoPics }) => ({
      isVideoPics,
    }))
  );
  const renderPoster: RenderPoster =
    useCallback(({ isBuffering }) => {
      if (isBuffering) {
        return <Loading />;
      }
      return (
        <div className="column-center p-2 md:p-8">
          <Background1/>
          <h4 className="relative text-4xl">
            Pics are random, go back to
            the gallery if you would
            like to choose your own.
          </h4>
          <div className="h-2" />
          <Button Icon={IconsPlayLarge}>
            Play
          </Button>
        </div>
      );
    }, []);
  return renderPoster;
};
