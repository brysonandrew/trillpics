import { useEffect } from "react";
import { MotionValue } from "framer-motion";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import {
  OVER_CELL_PARAM_KEY,
  SIZE_PARAM_KEY,
  ZOOM_PARAM_KEY,
} from "~/hooks/pic/constants";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { cellDecrypt } from "~/hooks/pic/cell/decrypt";
import { useTrillPicsStore } from "~/store/middleware";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TCursor } from "~/context/cursor";
import { isString } from "~/utils/validation/is/string";

export const usePicCell = (
  main: {
    cursor: TCursor;
  },
  scrollY: MotionValue
) => {
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
    OVER_CELL_PARAM_KEY
  );
  const size = Number(
    searchParams.get(SIZE_PARAM_KEY)
  );
  const isCursorOverCell = (
    nextCell: TCell
  ) => {
    const paramValue = searchParams.get(
      OVER_CELL_PARAM_KEY
    );

    const key = cellEncrypt(nextCell);
    return key === paramValue;
  };

  const move = (
    mx?: number,
    my?: number
  ) => {
    const currScrollY = scrollY.get();

    mx = mx ?? main.cursor.x.get();
    my =
      (my ?? main.cursor.y.get()) -
      currScrollY;
    console.log(mx, my, size);
    if (size === 0) return;

    const column = ~~(mx / size);
    const row = ~~(my / size);

    const key = cellEncrypt({
      column,
      row,
    });
    const paramValue = searchParams.get(
      OVER_CELL_PARAM_KEY
    );

    if (
      main.cursor.prev.column !==
        column ||
      main.cursor.prev.row !== row
    ) {
      endTimeout();
      // if (!isScrolling) {
      timeoutRef.current = setTimeout(
        () => {
          if (
            isString(key) &&
            key !== paramValue
          ) {
            searchParams.set(
              OVER_CELL_PARAM_KEY,
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
      main.cursor.prev.column = column;
      main.cursor.prev.row = row;
      // }
    }
  };

  const leave = (nextCell: TCell) => {
    console.log("cell.l");

    const key = cellEncrypt(nextCell);
    const paramValue = searchParams.get(
      OVER_CELL_PARAM_KEY
    );
    if (key === paramValue) {
      searchParams.delete(
        OVER_CELL_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };

  const clear = () => {
    console.log("cell.clear");
    searchParams.delete(
      OVER_CELL_PARAM_KEY
    );
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
