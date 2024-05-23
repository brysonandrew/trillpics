import { useSearchParams } from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { CELL_PARAM_KEY } from "~/hooks/pic/constants";
import { picZoomRead } from "~/hooks/pic/zoom/read";

export const usePicZoomRead = (
  currCell: TCell
) => {
  const [searchParams] =
    useSearchParams();
  const {
    isZoomDisabled,
    isZoomed,
    isClosing,
  } = picZoomRead(searchParams);
  const cellKeyParamValue =
    searchParams.get(CELL_PARAM_KEY);
  const currKey = cellEncrypt(currCell);
  const isCellZoomed =
    cellKeyParamValue === currKey &&
    isZoomed;
  const isCellClosing =
    cellKeyParamValue === currKey &&
    isClosing;

  return {
    isZoomDisabled,
    isZoomed,
    isCellZoomed,
    isClosing,
    isCellClosing,
  };
};
