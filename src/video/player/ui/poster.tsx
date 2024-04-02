import { Button } from "./button";
import { Loading } from "@brysonandrew/loading";
import { IconsPlay } from "@components/icons/play";
import {
  RenderPoster
} from "@remotion/player";
import { useCallback } from "react";

export const usePoster = () => {
  const renderPoster: RenderPoster =
    useCallback(({ isBuffering }) => {
      // Since v4.0.111, isBuffering is available
      if (isBuffering) {
        return <Loading />;
      }

      // if (playing) {
      //   return (
      //     <Button Icon={IconsPlay}>
      //       Play
      //     </Button>
      //   );
      // }

      // const Pause = (
      //   props: TClassValueProps
      // ) => (
      //   <I
      //     {...props}
      //     icon={"solar:pause-broken"}
      //   />
      // );
      return (
        <Button Icon={IconsPlay}>
          Play
        </Button>
      );
    }, []);
  return { renderPoster };
};
