import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import {
  CELL_PARAM_KEY,
  SIZE_PARAM_KEY,
  ZOOM_PARAM_KEY,
} from "~/hooks/pic/constants";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { usePicZoom } from "~/hooks/pic/zoom";
import { cellDecrypt } from "~/hooks/pic/cell/decrypt";
import { useTrillPicsStore } from "~/store/middleware";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TCursor } from "~/context/cursor";
import { isString } from "~/utils/validation/is/string";

export const usePicCell = (main: {
  cursor: TCursor;
}) => {
  const { endTimeout, timeoutRef } =
    useTimeoutRef();
  const { isScrolling } =
    useTrillPicsStore(
      ({ isScrolling }) => ({
        isScrolling,
      })
    );
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();

  const paramValue = searchParams.get(
    CELL_PARAM_KEY
  );
  const zoomParamValue =
    searchParams.get(ZOOM_PARAM_KEY);
  const size = Number(
    searchParams.get(SIZE_PARAM_KEY)
  );
  const isCursorOverCell = (
    nextCell: TCell
  ) => {
    const paramValue = searchParams.get(
      CELL_PARAM_KEY
    );

    const key = cellEncrypt(nextCell);
    return key === paramValue;
  };

  const move = () => {
    if (zoomParamValue || size === 0)
      return;
    const mx = main.cursor.x.get();
    const my = main.cursor.y.get();

    const column = ~~(mx / size);
    const row = ~~(my / size);

    const key = cellEncrypt({
      column,
      row,
    });
    const paramValue = searchParams.get(
      CELL_PARAM_KEY
    );

    if (
      main.cursor.prev.column !==
        column ||
      main.cursor.prev.row !== row
    ) {
      endTimeout();
      if (!isScrolling) {
        timeoutRef.current = setTimeout(
          () => {
            if (
              isString(key) &&
              key !== paramValue
            ) {
              searchParams.set(
                CELL_PARAM_KEY,
                key
              );
              navigate(
                `${pathname}?${searchParams}`,
                { replace: true }
              );
            }
          },
          0
        );
        main.cursor.prev.column =
          column;
        main.cursor.prev.row = row;
      }
    }
  };

  const leave = (nextCell: TCell) => {
    const key = cellEncrypt(nextCell);
    const paramValue = searchParams.get(
      CELL_PARAM_KEY
    );
    if (key === paramValue) {
      searchParams.delete(
        CELL_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };

  const clear = () => {
    console.log("clear");
    searchParams.delete(CELL_PARAM_KEY);
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  useEffect(() => {
    if (!isScrolling) {
      move();
    }
  }, [isScrolling]);

  return {
    isCursorOverCell,
    cell: paramValue
      ? cellDecrypt(paramValue)
      : null,
    move,
    leave,
    clear,
  };
};
export type TUsePicZoomResult =
  ReturnType<typeof usePicZoom>;
