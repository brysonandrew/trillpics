import {
  useCallback,
  useSyncExternalStore,
} from "react";
import { type CallbackListener } from "@remotion/player";
import { useTrillPicsStore } from "~/store/middleware";
import { isNull } from "~/utils/validation/is/null";

export const useCurrentPlayerFrame =
  () => {
    const { playerInstance } =
      useTrillPicsStore(
        ({ playerInstance }) => ({
          playerInstance,
        })
      );

    const subscribe = useCallback(
      (
        onStoreChange: (
          newVal: number
        ) => void
      ) => {
        if (
          isNull(
            playerInstance
          )
        ) {
          return () => undefined;
        }
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
          if (
            isNull(
              playerInstance
            )
          ) {
            return;
          }
          playerInstance.removeEventListener(
            "frameupdate",
            updater
          );
        };
      },
      [playerInstance]
    );

    const data =
      useSyncExternalStore<number>(
        subscribe,
        () =>
          playerInstance?.getCurrentFrame?.() ??
          0,
        () => 0
      );

    return data;
  };
