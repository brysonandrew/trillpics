import { useMemo } from "react";
import { TCell } from "~/pics/grid/pic";
import { cellDecrypt } from "~/hooks/pic/cell/decrypt";
import {
  COLUMNS_COUNT_PARAM_KEY,
  DELIMITER_VIDEO_PICS,
  VIDEO_PARAM_KEY,
} from "~/hooks/pic/constants";
import { useTrillPicsStore } from "~/store/middleware";
import { TPics } from "~/store/state/pics/types";
import { isNull } from "~/utils/validation/is/null";
import { isString } from "~/utils/validation/is/string";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";

type TPicsResult = {
  names: TPics;
  indicies: number[];
  keys: string[];
  cells: TCell[];
};

type TConfig = {
  searchParams: URLSearchParams;
  currKey: string | null;
};
export const useVideoPicsResult = ({
  searchParams,
  currKey,
}: TConfig) => {
  const { pics } = useTrillPicsStore(
    ({ pics }) => ({
      pics,
    })
  );
  const paramValue = searchParams.get(
    VIDEO_PARAM_KEY
  );
  const isVideoPics =
    isString(paramValue);
  const columnsCount = Number(
    searchParams.get(
      COLUMNS_COUNT_PARAM_KEY
    )
  );
  const picsResult = useMemo(() => {
    const result = [
      ...new Set<string>([
        ...(isVideoPics
          ? paramValue.split(
              DELIMITER_VIDEO_PICS
            )
          : []),
        ...(currKey ? [currKey] : []),
      ]),
    ].reduce<TPicsResult>(
      (a, name: string) => {
        const index =
          pics.indexOf(name);
        const cell = {
          row: Math.floor(index / 3),
          column: index % 3,
        };
        const key = cellEncrypt(cell);
        // const cell = cellDecrypt(key);
        if (isNull(cell) || isNull(key))
          return a;
        // const index =
        //   cell.row * columnsCount +
        //   (cell.column + 1);
        // const name = pics[index];
        a.indicies.push(index);
        a.names.push(name);
        a.keys.push(key);
        a.cells.push(cell);
        return a;
      },
      {
        keys: [],
        names: [],
        indicies: [],
        cells: [],
      }
    );
    const count = result.names.length;

    return { count, ...result };
  }, [
    paramValue,
    isVideoPics,
    currKey,
    columnsCount,
    pics.toString(),
  ]);

  return picsResult;
};
