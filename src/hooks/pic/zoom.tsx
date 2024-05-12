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
  ZOOM_PARAM_CLOSING_VALUE,
  ZOOM_PARAM_OPEN_VALUE,
} from "~/hooks/pic/constants";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";

export const usePicZoom = (
  cell?: TCell
) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();
  const paramValue = searchParams.get(
    ZOOM_PARAM_KEY
  );
  const cellKeyParamValue =
    searchParams.get(CELL_PARAM_KEY);
  const currCell =
    cell ??
    cellDecrypt(cellKeyParamValue);
  const currKey = cellEncrypt(currCell);

  const isZoomed =
    paramValue ===
    ZOOM_PARAM_OPEN_VALUE;

  const isCellZoomed =
    cellKeyParamValue === currKey &&
    isZoomed;
  const isClosing =
    paramValue ===
    ZOOM_PARAM_CLOSING_VALUE;
  const isCellClosing =
    cellKeyParamValue === currKey &&
    isClosing;

  const zoom = () => {
    searchParams.append(
      ZOOM_PARAM_KEY,
      ZOOM_PARAM_OPEN_VALUE
    );

    paramsMoveToEnd(
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
      ZOOM_PARAM_CLOSING_VALUE
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
    console.log("zoom");

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
    zoom,
    close,
    clear,
    toggle,
  };
};
export type TUsePicZoomResult =
  ReturnType<typeof usePicZoom>;
