import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import { useVideoStore } from "~/store";

export const SEARCH_PARAM_ID = "open";

export type TUsePicDirectorsModeControlsConfig =
  Pick<TUseBoxChildProps, "videoOrder">;
export const usePicDirectorsModeControls = ({
  videoOrder,
}: TUsePicDirectorsModeControlsConfig) => {
  const { isControls } =
    useVideoStore();
  const isAdded = videoOrder > -1;

  return {
    videoOrder,
    isAdded,
    isControls
  };
};

export type TUsePicDirectorsModeControls =
  ReturnType<
    typeof usePicDirectorsModeControls
  >;
