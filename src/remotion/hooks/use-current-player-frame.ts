import {
  useCallback,
  useSyncExternalStore,
} from "react";
import { type CallbackListener } from "@remotion/player";
import { useShallow } from "zustand/react/shallow";
import { useVideoStore } from "~/store";

export const useCurrentPlayerFrame =
  () => {
    const { playerElement } =
      useVideoStore(
        useShallow(
          ({ playerElement }) => ({
            playerElement,
          })
        )
      );

    const subscribe = useCallback(
      (
        onStoreChange: (
          newVal: number
        ) => void
      ) => {
        if (!playerElement) {
          return () => undefined;
        }
        const updater: CallbackListener<
          "frameupdate"
        > = ({ detail }) => {
          onStoreChange(detail.frame);
        };
        playerElement.addEventListener(
          "frameupdate",
          updater
        );
        return () => {
          playerElement.removeEventListener(
            "frameupdate",
            updater
          );
        };
      },
      [playerElement]
    );

    const data =
      useSyncExternalStore<number>(
        subscribe,
        () =>
          playerElement?.getCurrentFrame?.() ??
          0,
        () => 0
      );

    return data;
  };
