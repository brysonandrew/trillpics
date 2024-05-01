import {
  TPic,
  TPics,
} from "~/store/state/pics/types";
import {
  TPicsRows,
  TTableRowsConfig,
} from "~/store/state/table/types";
import { isDefined } from "~/utils/validation/is/defined";

export const tableUpdateRows = ({
  cells,
  count,
}: TTableRowsConfig): TPicsRows => {
  const rows: TPicsRows = [
    ...Array(count.rows),
  ].map((_, ri) => {
    const columns: TPics = [
      ...Array(count.columns),
    ].map((__, ci) => {
      const index =
        ri * count.columns + ci;
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
