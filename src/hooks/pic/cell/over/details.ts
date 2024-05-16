import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { TUseCellOverResult } from "~/hooks/pic/cell/over/hook";
import { resolveCellOver } from "~/hooks/pic/cell/over/resolver";
import { TPics } from "~/store/state/pics/types";
import { isNumberFinite } from "~/utils/validation/is/timeout";
import { isValue } from "~/utils/validation/is/value";

type TConfig = {
  pics: TPics;
  columnsCount: number;
  searchParams: URLSearchParams;
};
export const resolveCellOverDetails = ({
  searchParams,
  ...config
}: TConfig) => {
  const cellOverResult: TUseCellOverResult =
    resolveCellOver(searchParams);
  const { cell: currCell, size } =
    cellOverResult;
  const { pics, columnsCount } = config;
  const currKey = cellEncrypt(currCell);
  const isCurrCell = isValue(currCell);
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
    size,
  };
};
export type TResolveDetailsResult =
  ReturnType<
    typeof resolveCellOverDetails
  >;
