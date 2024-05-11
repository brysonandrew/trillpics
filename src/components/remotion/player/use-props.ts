import { LegacyRef } from "react";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import { useTrillPicsStore } from "~/store/middleware";
import { PlayerRef } from "@remotion/player";

export const useRemotionPlayerProps =
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
    const {
      width,
      height,
      props: inputProps,
      ...props
    } = useRemotionProps();

    const resolveRef: LegacyRef<
      PlayerRef | null
    > = (
      instance: PlayerRef | null
    ) => {
      if (instance && !playerInstance) {
        set({
          playerInstance: instance,
        });
      }
    };

    return {
      ref: resolveRef,
      inputProps,
      compositionWidth: width,
      compositionHeight: height,
      style: { cursor: "pointer" },
      ...props,
    };
  };
