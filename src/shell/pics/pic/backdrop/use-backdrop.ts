import { useImageDimensions } from "@brysonandrew/measure";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import { useTrillPicsStore } from "~/store";

export const SEARCH_PARAM_ID = "open";

export type TUsePicBackdropConfig =
  Pick<
    TUseBoxChildProps,
    "cellDimensions" | "frontCheckState"
  >;
export const usePicBackdrop = ({
  cellDimensions,
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
      image: cellDimensions,
    });
  return {
    screenDimensions,
    screen,
    zoomDimensions,
  };
};

export type TUsePicBackdrop =
  ReturnType<typeof usePicBackdrop>;
