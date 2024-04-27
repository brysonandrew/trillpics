import { useRemotionProps } from "~/hooks/remotion/use-props";
import { useTrillPicsStore } from "~/store";
import { PlayerRef } from "@remotion/player";

export const useRemotionPlayerProps =
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
    const {
      width,
      height,
      props: inputProps,
      ...props
    } = useRemotionProps();
    const resolveRef = (
      instance: PlayerRef | null
    ) => {
      if (
        instance &&
        !playerElementRef.current
      ) {
        updatePlayerState({
          playerElementRef: {
            current: instance,
          },
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
