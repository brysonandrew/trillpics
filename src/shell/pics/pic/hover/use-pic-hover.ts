import { TUseBox } from "~/shell/pics/pic/box";
import { useVideoStore } from "~/store";

export const SEARCH_PARAM_ID = "open";

export type TUsePicHoverConfig = Pick<
  TUseBox,
  "videoOrder"
>;
export const usePicHover = ({
  videoOrder,
}: TUsePicHoverConfig) => {
  const { isControls } =
    useVideoStore();

  const isAdded = videoOrder > -1;

  return {
    videoOrder,
    isControls,
    isAdded,
  };
};

export type TUsePicHover = ReturnType<
  typeof usePicHover
>;
