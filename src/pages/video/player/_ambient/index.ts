import { useTrillPicsStore } from "~/store/middleware";

export const useVideoPlayerAmbient =
  () => {
    const {
      playerInstance,
      isPlaying,
    } = useTrillPicsStore(
      ({
        playerInstance,
        isPlaying,
      }) => ({
        playerInstance,
        isPlaying,
      })
    );

    return {
      isPlaying,
      isPlayerInstance: Boolean(
        playerInstance
      ),
    };
  };
export type TUseVideoPlayerAmbientResult =
  ReturnType<
    typeof useVideoPlayerAmbient
  >;
