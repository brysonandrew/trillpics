import { LegacyRef } from "react";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import { PlayerRef } from "@remotion/player";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";

export const useRemotionPlayerProps = (
  _inputProps: TPicSeriesProps
) => {
  const {
    playerInstance,
    updatePlayerInstance,
  } = useContextPlayer_Init();
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
      updatePlayerInstance(instance);
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
