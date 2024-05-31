import { useEffect } from "react";
import { CallbackListener } from "@remotion/player";
import {
  TPlayerInstanceReady,
  TUpdateReadyStateHandler,
  TVideoState,
} from "~/pages/video/player/_context/ready/types";

export const usePlayerListeners = (
  playerInstance: TPlayerInstanceReady,
  state: TVideoState,
  updateState: TUpdateReadyStateHandler
) => {
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
  const handleEnded = () => {
    handlePlay(false);
  };

  const handleMuteChange: CallbackListener<
    "mutechange"
  > = ({ detail: { isMuted } }) => {
    updateState({
      isMuted,
    });
  };

  const updateStarted = (
    frame: number
  ) => {
    if (frame > 0) {
      if (!state.isStarted) {
        updateState({
          isStarted: true,
        });
      }
    } else {
      if (state.isStarted) {
        updateState({
          isStarted: false,
        });
      }
    }
  };

  const handleTimeupdate: CallbackListener<
    "timeupdate"
  > = ({ detail: { frame } }) => {
    updateStarted(frame);
  };

  const handleSeeked: CallbackListener<
    "seeked"
  > = ({ detail: { frame } }) => {
    updateStarted(frame);
  };

  useEffect(() => {
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
      "seeked",
      handleSeeked
    );
    playerInstance.addEventListener(
      "ended",
      handleEnded
    );

    return () => {
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
        "seeked",
        handleSeeked
      );
      playerInstance.removeEventListener(
        "ended",
        handleEnded
      );
    };
  }, [playerInstance]);
};
