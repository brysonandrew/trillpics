import { TUseBox } from "~/shell/pics/pic/box";
import { useVideoStore } from "~/store";

export const SEARCH_PARAM_ID = "open";

export type TUsePicDirectorsModeConfig =
  Pick<TUseBox, "videoOrder">;
export const usePicDirectorsMode = ({
  videoOrder,
}: TUsePicDirectorsModeConfig) => {
  const { isControls } =
    useVideoStore();
  const isAdded = videoOrder > -1;

  return {
    videoOrder,
    isAdded,
    isControls
  };
};

export type TUsePicDirectorsMode =
  ReturnType<
    typeof usePicDirectorsMode
  >;
