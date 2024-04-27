import { useCallback } from "react";
import { Loading } from "@brysonandrew/loading";
import { IconsPlayLarge } from "~/components/icons/playback/play";
import { RenderPoster } from "@remotion/player";
import { Background1 } from "~/components/decoration/background/1";
import { Button } from "./button";

export const usePoster = () => {
  const renderPoster: RenderPoster =
    useCallback(({ isBuffering }) => {
      if (isBuffering) {
        return <Loading />;
      }
      return (
        <div className="column-center p-2 md:p-8">
          <Background1 />
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
