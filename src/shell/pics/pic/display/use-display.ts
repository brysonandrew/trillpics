import { resolvePicSrc } from "~/utils/src";
import { TUseBox } from "~/shell/pics/pic/box";
import { TUsePicBackdrop } from "~/shell/pics/pic/backdrop/use-backdrop";

export const SEARCH_PARAM_ID = "open";

export type TUsePicDisplayConfig = Pick<
  TUseBox,
  | "name"
  | "isPicZoomed"
  | "frontCheckState"
>;
export const usePicDisplay = ({
  name,
  isPicZoomed,
  frontCheckState: [isFront, setFront],
}: TUsePicDisplayConfig) => {
  const src = resolvePicSrc(name);

  const handleLayoutAnimationComplete =
    () => {
      if (!isPicZoomed) {
        setFront(false);
      }
    };

  return {
    src,
    onLayoutAnimationComplete:
      handleLayoutAnimationComplete,
  };
};

export type TUsePicDisplay = ReturnType<
  typeof usePicDisplay
>;
