import { useImageDimensions } from "@brysonandrew/measure";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { TPicHoverResult } from "~/shell/pics/pic/use-hover";
import { useTrillPicsStore } from "~/store";

export const SEARCH_PARAM_ID = "open";

export type TUsePicBackdropConfig =
  TBoxChildProps;
export const usePicBackdrop = ({
  width,
  height,
}: TUsePicBackdropConfig) => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  const screenDimensions =
    screen.isDimensions
      ? {
          width: screen.width,
          height: screen.height,
        }
      : null;
  const zoomDimensions =
    useImageDimensions({
      box: screenDimensions,
      image: { width, height },
    });
  return {
    screenDimensions,
    screen,
    zoomDimensions,
  };
};

export type TUsePicBackdrop =
  ReturnType<typeof usePicBackdrop>;
