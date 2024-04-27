import { useRemotionProps } from "~/hooks/remotion/use-props";
import { useTrillPicsStore } from "~/store";
import { PlayerRef } from "@remotion/player";

export const useRemotionPlayerProps =
  () => {
    const {
      playerInstance,
      updatePlayerState,
    } = useTrillPicsStore(
      ({
        playerInstance,
        updatePlayerState,
      }) => ({
        playerInstance,
        updatePlayerState,
      })
    );
    const {
      width,
      height,
      props: inputProps,
      ...props
    } = useRemotionProps();
    const resolveRef = (
      instance: PlayerRef | null
    ) => {
      if (instance && !playerInstance) {
        updatePlayerState({
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
