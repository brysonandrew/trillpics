import {
  TPic,
  TPics,
} from "~/store/slices/pics/types";
import { TPicsRows, TTableRowsConfig } from "~/store/slices/table/types";
import { isDefined } from "~/utils/validation/is/defined";

export const tableUpdateRows = ({
  cells,
  rowsCount,
  columnsCount,
}: TTableRowsConfig): TPicsRows => {
  const rows: TPicsRows = [
    ...Array(rowsCount),
  ].map((_, ri) => {
    const columns: TPics = [
      ...Array(columnsCount),
    ].map((__, ci) => {
      const index =
        ri * columnsCount + ci;
      const name = cells[index];

      const isReady = isDefined(name);
      const item: TPic = isReady
        ? name
        : index;

      return item;
    });

    return {
      columns,
    };
  });
  return rows;
};
