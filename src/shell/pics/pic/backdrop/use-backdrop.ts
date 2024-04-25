import { useViewport } from "~/context/viewport";
import { useImageDimensions } from "@brysonandrew/measure";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";

export const SEARCH_PARAM_ID = "open";

export type TUsePicBackdropConfig =
  Pick<
    TUseBoxChildProps,
    "cellDimensions" | "frontCheckState"
  >;
export const usePicBackdrop = ({
  cellDimensions,
}: TUsePicBackdropConfig) => {
  const viewport = useViewport();
  const viewportDimensions =
    viewport.isDimensions
      ? {
          width: viewport.width,
          height: viewport.height,
        }
      : null;
  const zoomDimensions =
    useImageDimensions({
      box: viewportDimensions,
      image: cellDimensions,
    });
  return {
    viewportDimensions,
    viewport,
    zoomDimensions,
  };
};

export type TUsePicBackdrop =
  ReturnType<typeof usePicBackdrop>;
