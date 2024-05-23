import { useEffect } from "react";
import { useTrillPicsStore } from "~/store/middleware";

export const usePlayerListeners =
  () => {
    const {
      playerInstance,
      set,
    } = useTrillPicsStore(
      ({
        playerInstance,
        set,
      }) => ({
        playerInstance,
        set,
      })
    );

    const handlePlay = (
      isPlaying = true
    ) => {
      set({
        isPlaying,
      });
    };

    const handlePlaying = () =>
      handlePlay(true);
    const handlePause = () =>
      handlePlay(false);

    useEffect(() => {
      if (playerInstance) {
        playerInstance.seekTo(0);

        playerInstance.addEventListener(
          "play",
          handlePlaying
        );
        playerInstance.addEventListener(
          "pause",
          handlePause
        );
      }

      return () => {
        if (playerInstance) {
          playerInstance.removeEventListener(
            "play",
            handlePlaying
          );
          playerInstance.removeEventListener(
            "pause",
            handlePause
          );
        }
      };
    }, [playerInstance, set]);
  };
