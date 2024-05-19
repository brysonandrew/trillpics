import { useMemo } from "react";
import { TCell } from "~/pics/grid/pic";
import { useTrillPicsStore } from "~/store/middleware";
import {
  TPic,
  TPics,
} from "~/store/state/pics/types";
import { isNull } from "~/utils/validation/is/null";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";

type TPicsResult = {
  names: TPics;
  indicies: number[];
  keys: string[];
  cells: TCell[];
};

type TConfig = {
  isVideoPics: boolean;
  paramValues: string[];
  currName: TPic | null;
  columnsCount: number;
};
export const useVideoPicsResult = ({
  isVideoPics,
  columnsCount,
  currName,
  paramValues,
}: TConfig) => {
  const { pics } = useTrillPicsStore(
    ({ pics }) => ({
      pics,
    })
  );

  const picsResult = useMemo(() => {
    const paramVideoPics = [
      ...[
        ...(Array.isArray(paramValues)
          ? paramValues
          : []),
        // ...(currName ? [currName] : []), // maybes
      ],
    ];
    const uniqueVideoPics =
      new Set<TPic>(paramVideoPics);

    const result = [
      ...uniqueVideoPics,
    ].reduce<TPicsResult>(
      (a, name: TPic) => {
        const index =
          pics.indexOf(name);
        const cell = {
          row: Math.floor(
            index / columnsCount
          ),
          column: index % columnsCount,
        };
        const key = cellEncrypt(cell);
        if (isNull(cell) || isNull(key))
          return a;

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
    isVideoPics,
    columnsCount,
    currName,
    pics.toString(),
    paramValues.toString(),
  ]);

  return picsResult;
};
