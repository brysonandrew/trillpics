import { useRemotionProps } from "@/remotion/use-props";
import { useVideoStore } from "@/store";
import { PlayerRef } from "@remotion/player";

export const useRemotionPlayerProps =
  () => {
    const {
      playerElement,
      updateState,
    } = useVideoStore();

    const {
      width,
      height,
      props: inputProps,
      ...props
    } = useRemotionProps();
    const resolveRef = (
      instance: PlayerRef | null
    ) => {
      if (instance && !playerElement) {
        updateState({
          playerElement: instance,
        });
      }
    };

    return {
      resolveRef,
      inputProps,
      compositionWidth: width,
      compositionHeight: height,
      ...props,
    };
  };
