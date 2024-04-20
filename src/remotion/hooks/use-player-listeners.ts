import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useVideoStore } from "~/store";

export const usePlayerListeners =
  () => {
    const {
      playerElement,
      updateState,
    } = useVideoStore(
      useShallow(
        ({
          playerElement,
          updateState,
        }) => ({
          playerElement,
          updateState,
        })
      )
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
      if (playerElement) {
        playerElement.seekTo(0);

        playerElement.addEventListener(
          "play",
          handlePlaying
        );
        playerElement.addEventListener(
          "pause",
          handlePause
        );
      }

      return () => {
        if (playerElement) {
          playerElement.removeEventListener(
            "play",
            handlePlaying
          );
          playerElement.removeEventListener(
            "pause",
            handlePause
          );
        }
      };
    }, [playerElement, updateState]);
  };
