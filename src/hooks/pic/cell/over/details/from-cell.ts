import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { TCellOverDetailsConfig } from "~/hooks/pic/cell/over/details/type";
import { TCell } from "~/pics/grid/pic";
import { isNumberFinite } from "~/utils/validation/is/timeout";
import { isValue } from "~/utils/validation/is/value";
type TConfig =
  TCellOverDetailsConfig & {
    cell: TCell|null;
  };
export const detailsFromCell =
  ({
    cell: currCell,
    pics,
    columnsCount,
  }: TConfig) => {
    const currKey =
      cellEncrypt(currCell);
    const isCurrCell =
      isValue(currCell);
    const currIndex =
      isCurrCell &&
      currCell.row * columnsCount +
        currCell.column;

    const currName = isNumberFinite(
      currIndex
    )
      ? pics[currIndex]
      : null;

    return {
      currName,
      currCell,
      currKey,
    };
  };
