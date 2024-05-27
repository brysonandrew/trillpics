import { useEffect } from "react";
import { CallbackListener } from "@remotion/player";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const usePlayerListeners =
  () => {
    const { playerInstance, set } =
      useTrillPicsStore(
        ({ playerInstance, set }) => ({
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
    const handleEnded = () => {
      handlePlay(false);
    };
    const handleMuteChange: CallbackListener<
      "mutechange"
    > = ({ detail: { isMuted } }) => {
      set({
        isMuted,
      });
    };

    const handleTimeupdate: CallbackListener<
      "timeupdate"
    > = ({ detail: { frame } }) => {
      set((draft: TState) => {
        if (frame > 0) {
          if (!draft.isStarted) {
            draft.isStarted = true;
          }
        } else {
          if (draft.isStarted) {
            draft.isStarted = false;
          }
        }
      });
    };
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
        playerInstance.addEventListener(
          "mutechange",
          handleMuteChange
        );
        playerInstance.addEventListener(
          "timeupdate",
          handleTimeupdate
        );
        playerInstance.addEventListener(
          "ended",
          handleEnded
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
          playerInstance.removeEventListener(
            "mutechange",
            handleMuteChange
          );
          playerInstance.removeEventListener(
            "timeupdate",
            handleTimeupdate
          );
          playerInstance.removeEventListener(
            "ended",
            handleEnded
          );
        }
      };
    }, [playerInstance, set]);
  };
