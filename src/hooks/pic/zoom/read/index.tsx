import { useSearchParams } from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import {
  CELL_PARAM_KEY,
  ZOOM_PARAM_KEY,
  PARAM_CLOSING_VALUE,
  PARAM_OPEN_VALUE,
} from "~/hooks/pic/constants";

export const picZoomRead = (
  searchParams: URLSearchParams
) => {
  const paramValue = searchParams.get(
    ZOOM_PARAM_KEY
  );
  const isZoomDisabled =
    !searchParams.has(CELL_PARAM_KEY);
  const isZoomed =
    paramValue === PARAM_OPEN_VALUE;

  const isClosing =
    paramValue === PARAM_CLOSING_VALUE;

  return {
    isZoomDisabled,
    isZoomed,
    isClosing,
  };
};
