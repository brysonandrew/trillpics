import {
  useCallback,
  useSyncExternalStore,
} from "react";
import { type CallbackListener } from "@remotion/player";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";

export const useCurrentPlayerFrame =
  () => {
    const { playerInstance } =
      useContextPlayer_Ready();

    const subscribe = useCallback(
      (
        onStoreChange: (
          newVal: number
        ) => void
      ) => {
        const updater: CallbackListener<
          "frameupdate"
        > = ({ detail }) => {
          onStoreChange(detail.frame);
        };
        playerInstance.addEventListener(
          "frameupdate",
          updater
        );
        return () => {
          playerInstance.removeEventListener(
            "frameupdate",
            updater
          );
        };
      },
      []
    );

    const data =
      useSyncExternalStore<number>(
        subscribe,
        () =>
          playerInstance.getCurrentFrame(),
        () => 0
      );

    return data;
  };
