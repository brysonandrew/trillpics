import { useEffect } from "react";
import { useTrillPicsStore } from "~/store";

export const usePlayerListeners =
  () => {
    const {
      playerElementRef,
      updatePlayerState,
    } = useTrillPicsStore(
      ({
        playerElementRef,
        updatePlayerState,
      }) => ({
        playerElementRef,
        updatePlayerState,
      })
    );

    const handlePlay = (
      isPlaying = true
    ) => {
      updatePlayerState({
        isPlaying,
      });
    };

    const handlePlaying = () =>
      handlePlay(true);
    const handlePause = () =>
      handlePlay(false);

    useEffect(() => {
      if (playerElementRef.current) {
        playerElementRef.current.seekTo(
          0
        );

        playerElementRef.current.addEventListener(
          "play",
          handlePlaying
        );
        playerElementRef.current.addEventListener(
          "pause",
          handlePause
        );
      }

      return () => {
        if (playerElementRef.current) {
          playerElementRef.current.removeEventListener(
            "play",
            handlePlaying
          );
          playerElementRef.current.removeEventListener(
            "pause",
            handlePause
          );
        }
      };
    }, [playerElementRef, updatePlayerState]);
  };
