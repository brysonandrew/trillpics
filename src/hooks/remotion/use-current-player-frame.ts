import {
  useCallback,
  useSyncExternalStore,
} from "react";
import { type CallbackListener } from "@remotion/player";
import { useTrillPicsStore } from "~/store";
import { isNull } from "~/utils/validation/is/null";

export const useCurrentPlayerFrame =
  () => {
    const { playerElementRef } =
      useTrillPicsStore(
        ({ playerElementRef }) => ({
          playerElementRef,
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
            playerElementRef.current
          )
        ) {
          return () => undefined;
        }
        const updater: CallbackListener<
          "frameupdate"
        > = ({ detail }) => {
          onStoreChange(detail.frame);
        };
        playerElementRef.current.addEventListener(
          "frameupdate",
          updater
        );
        return () => {
          if (
            isNull(
              playerElementRef.current
            )
          ) {
            return;
          }
          playerElementRef.current.removeEventListener(
            "frameupdate",
            updater
          );
        };
      },
      [playerElementRef]
    );

    const data =
      useSyncExternalStore<number>(
        subscribe,
        () =>
          playerElementRef.current?.getCurrentFrame?.() ??
          0,
        () => 0
      );

    return data;
  };
