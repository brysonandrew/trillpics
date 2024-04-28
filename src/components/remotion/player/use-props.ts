import { useRemotionProps } from "~/hooks/remotion/use-props";
import { useTrillPicsStore } from "~/store";
import { PlayerRef } from "@remotion/player";

export const useRemotionPlayerProps =
  () => {
    const {
      playerInstance,
      updateState,
    } = useTrillPicsStore(
      ({
        playerInstance,
        updateState,
      }) => ({
        playerInstance,
        updateState,
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
        updateState({
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
