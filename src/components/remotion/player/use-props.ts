import { LegacyRef } from "react";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import { useTrillPicsStore } from "~/store/middleware";
import { PlayerRef } from "@remotion/player";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";

export const useRemotionPlayerProps = (
  _inputProps: TPicSeriesProps
) => {
  const { playerInstance, set } =
    useTrillPicsStore(
      ({ playerInstance, set }) => ({
        playerInstance,
        set,
      })
    );
  const {
    width: compositionWidth,
    height: compositionHeight,
    props: inputProps,
    ...props
  } = useRemotionProps(_inputProps);

  const resolveRef: LegacyRef<
    PlayerRef | null
  > = (instance: PlayerRef | null) => {
    if (instance && !playerInstance) {
      set({
        playerInstance: instance,
      });
    }
  };

  return {
    ref: resolveRef,
    compositionWidth,
    compositionHeight,
    style: {
      cursor: "pointer",
      width: "100%",
    },
    inputProps: {
      base: "remotion",
      ...inputProps,
    },
    ...props,
  };
};
