import { useViewport } from "~/context/viewport";
import { useImageDimensions } from "@brysonandrew/measure";
import { TUseBox } from "~/shell/pics/pic/box";

export const SEARCH_PARAM_ID = "open";

export type TUsePicBackdropConfig =
  Pick<
    TUseBox,
    | "isPicZoomed"
    | "cellDimensions"
    | "frontCheckState"
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
