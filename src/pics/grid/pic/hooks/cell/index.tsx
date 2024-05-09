import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import {
  CELL_PARAM_KEY,
  SEARCH_PARAM_KEY,
} from "~/pics/grid/pic/hooks/constants";
import { cellEncrypt } from "~/pics/grid/pic/hooks/cell/encrypt";
import { usePicZoom } from "~/pics/grid/pic/hooks/zoom";
import { TCursorCell } from "~/context/cursor";

type TConfig = TCursorCell;
export const usePicCell = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();
  const paramValue = searchParams.get(
    CELL_PARAM_KEY
  );
  const isCursorOverCell = (
    nextCell: TCell
  ) => {
    const key = cellEncrypt(nextCell);
    return key === paramValue;
  };

  const move = (nextCell: TCell) => {
    const key = cellEncrypt(nextCell);
    if (key !== paramValue) {
      searchParams.set(
        CELL_PARAM_KEY,
        key
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };

  const leave = (nextCell: TCell) => {
    const key = cellEncrypt(nextCell);
    if (key === paramValue) {
      searchParams.delete(
        SEARCH_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };

  const reset = () => {
    searchParams.delete(CELL_PARAM_KEY);
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  useEffect(() => {
    reset();
  }, []);

  return {
    isCursorOverCell,
    move,
    leave,
    reset,
  };
};
export type TUsePicZoomResult =
  ReturnType<typeof usePicZoom>;
