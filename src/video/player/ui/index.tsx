import { TClassValueProps } from "@brysonandrew/config-types";
import { I } from "@brysonandrew/icons-i";
import { Loading } from "@brysonandrew/loading";
import { IconsPlay } from "@components/icons/play";
import {
  RenderFullscreenButton,
  RenderPlayPauseButton,
} from "@remotion/player";
import { Button } from "@video/player/ui/button";
import { useCallback } from "react";

export const useButtons = () => {
  const renderFullscreenButton: RenderFullscreenButton =
    useCallback(({ isFullscreen }) => {
      if (isFullscreen) {
        return (
          <I
            icon={
              "mingcute:fullscreen-exit-fill"
            }
          />
        );
      }

      return (
        <I
          icon={
            "mingcute:fullscreen-fill"
          }
        />
      );
    }, []);
  const renderPlayPauseButton: RenderPlayPauseButton =
    useCallback(
      ({ playing, isBuffering }) => {
        // Since v4.0.111, isBuffering is available
        if (playing && isBuffering) {
          return <Loading />;
        }

        if (playing) {
          return (
            <Button Icon={IconsPlay}>
              Play
            </Button>
          );
        }

        const Pause = (
          props: TClassValueProps
        ) => (
          <I
            {...props}
            icon={"solar:pause-broken"}
          />
        );
        return (
          <Button Icon={Pause}>
            Pause
          </Button>
        );
      },
      []
    );
  
  return {
    renderFullscreenButton,
    renderPlayPauseButton,
  };
};
