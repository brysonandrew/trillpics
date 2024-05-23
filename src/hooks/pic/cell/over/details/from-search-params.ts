import { detailsFromCell } from "~/hooks/pic/cell/over/details/from-cell";
import { TCellOverDetailsConfig } from "~/hooks/pic/cell/over/details/type";
import { TUseCellOverResult } from "~/hooks/pic/cell/over/hook";
import { resolveCellOver } from "~/hooks/pic/cell/over/resolver";

type TConfig =
  TCellOverDetailsConfig & {
    searchParams: URLSearchParams;
  };
export const detailsFromSearchParams = ({
  searchParams,
  columnsCount,
  pics,
}: TConfig) => {
  const cellOverResult: TUseCellOverResult =
    resolveCellOver(searchParams);
  const { cell, size } = cellOverResult;
  const fromCell =
    detailsFromCell({
      cell,
      columnsCount,
      pics,
    });

  return {
    size,
    ...fromCell,
  };
};
