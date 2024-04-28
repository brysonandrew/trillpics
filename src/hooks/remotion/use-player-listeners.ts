import { useEffect } from "react";
import { useTrillPicsStore } from "~/store";

export const usePlayerListeners =
  () => {
    const {
      playerInstance,
      updateState,
    } = useTrillPicsStore(
      ({
        playerInstance,
        updateState,
      }) => ({
        playerInstance,
        updateState,
      })
    );

    const handlePlay = (
      isPlaying = true
    ) => {
      updateState({
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
    }, [playerInstance, updateState]);
  };
