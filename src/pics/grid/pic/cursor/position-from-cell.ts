import { resolveSquare } from "@brysonandrew/measure";
import { TUseCellOverResult } from "~/hooks/pic/cell/over/hook";
import { isNull } from "~/utils/validation/is/null";

export const resolvePositionFromCell =
  ({
    cell,
    size,
  }: Pick<TUseCellOverResult, 'cell' | 'size'>) => 
    isNull(cell)
      ? {}
      : {
          left: cell.column * size,
          top: cell.row * size,
          ...resolveSquare(size),
        };
