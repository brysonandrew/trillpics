import { LegacyRef } from "react";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import { PlayerRef } from "@remotion/player";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import { TGenerateInput } from "~/types/trpc/generate";

export const useRemotionPlayerProps = (
  _inputProps: TGenerateInput
) => {
  const {
    playerInstance,
    updatePlayerInstance,
  } = useContextPlayer_Init();
  const {
    canvasDimensions: {
      width: compositionWidth,
      height: compositionHeight,
    },
    ...inputProps
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
    ...inputProps,
    durationInFrames: Math.ceil(
      inputProps.fps *
        inputProps.seconds
    ),
  };
};
