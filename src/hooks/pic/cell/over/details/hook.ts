import { detailsFromCell } from "~/hooks/pic/cell/over/details/from-cell";
import { usePicTableReadColumnsCount } from "~/hooks/pic/table/read/columns-count";
import { TCell } from "~/pics/grid/pic";
import { useTrillPicsStore } from "~/store/middleware";

export const useDetailsFromCell = (
  cell: TCell | null
) => {
  const columnsCount =
    usePicTableReadColumnsCount();
  const { pics } = useTrillPicsStore(
    ({ pics }) => ({
      pics,
    })
  );

  if (!cell) return null;
  return detailsFromCell({
    pics,
    cell,
    columnsCount,
  });
};
