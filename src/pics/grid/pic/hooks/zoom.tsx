import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { cellEncrypt } from "~/pics/grid/pic/hooks/cell/encrypt";
import { CLOSING_FLAG, SEARCH_PARAM_KEY } from "~/pics/grid/pic/hooks/constants";
import { TCursorCell } from "~/context/cursor";
import { isString } from "~/utils/validation/is/string";

type TConfig = TCursorCell;
export const usePicZoom = (
  cell: TConfig
) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();
  const paramValue = searchParams.get(
    SEARCH_PARAM_KEY
  );
  const isZoomed = isString(paramValue);
  const isClosing =
    isZoomed &&
    Boolean(
      paramValue.includes(CLOSING_FLAG)
    );
  const key =  cellEncrypt(cell)
  const isCellZoomed =
    key === paramValue;
  const isCellClosing =
    `${key}${CLOSING_FLAG}` ===
    paramValue;

  const zoom = () => {
    const key =  cellEncrypt(cell)
    searchParams.set(
      SEARCH_PARAM_KEY,
      key
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };
  const close = () => {
    searchParams.set(
      SEARCH_PARAM_KEY,
      `${paramValue}${CLOSING_FLAG}`
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };
  const reset = () => {
    searchParams.delete(
      SEARCH_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };
  useEffect(() => {
    reset()
  }, [])
  return {
    isZoomed,
    isCellZoomed,
    isClosing,
    isCellClosing,
    zoom,
    close,
    reset,
  };
};
export type TUsePicZoomResult =
  ReturnType<
    typeof usePicZoom
  >;
