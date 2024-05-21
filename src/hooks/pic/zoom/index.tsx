import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import { cellDecrypt } from "~/hooks/pic/cell/decrypt";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import {
  CELL_PARAM_KEY,
  ZOOM_PARAM_KEY,
  PARAM_CLOSING_VALUE,
  PARAM_OPEN_VALUE,
} from "~/hooks/pic/constants";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";
import { picZoomRead } from "~/hooks/pic/zoom/read";

export const usePicZoom = (
  cell?: TCell
) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();

  const {
    isZoomDisabled,
    isZoomed,
    isClosing,
  } = picZoomRead(searchParams);

  const cellKeyParamValue =
    searchParams.get(CELL_PARAM_KEY);
  const currCell =
    cell ??
    cellDecrypt(cellKeyParamValue);
  const currKey = cellEncrypt(currCell);
  const isCurrOver =
    cell &&
    cellKeyParamValue === currKey;

  const isCellZoomed =
    cellKeyParamValue === currKey &&
    isZoomed;
  const isCellClosing =
    cellKeyParamValue === currKey &&
    isClosing;

  const zoom = () => {
    if (isZoomDisabled) return;
    searchParams.set(
      ZOOM_PARAM_KEY,
      PARAM_OPEN_VALUE
    );

    const r = paramsMoveToEnd(
      searchParams,
      CELL_PARAM_KEY
    );

    navigate(
      `${pathname}?${searchParams}`
    );
  };
  const close = () => {
    searchParams.set(
      ZOOM_PARAM_KEY,
      PARAM_CLOSING_VALUE
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };
  const clear = () => {
    if (isCellClosing) {
      searchParams.delete(
        ZOOM_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };
  const toggle = () => {
    if (isZoomed) {
      if (isClosing) {
        clear();
      } else {
        close();
      }
    } else {
      zoom();
    }
  };

  return {
    isZoomed,
    isCellZoomed,
    isClosing,
    isCellClosing,
    isCurrOver,
    zoom,
    close,
    clear,
    toggle,
  };
};
export type TUsePicZoomResult =
  ReturnType<typeof usePicZoom>;
