import {
  OVER_CELL_PARAM_KEY,
  ZOOM_PARAM_KEY,
  PARAM_CLOSING_VALUE,
  PARAM_OPEN_VALUE,
} from "~/hooks/pic/constants";

// to deprecate

export const picZoomRead = (
  searchParams: URLSearchParams
) => {
  const paramValue = searchParams.get(
    ZOOM_PARAM_KEY
  );
  const isZoomDisabled =
    !searchParams.has(OVER_CELL_PARAM_KEY);
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
