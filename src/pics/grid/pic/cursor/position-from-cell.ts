import { resolveSquare } from "@brysonandrew/measure";
import { TUseCellOverResult } from "~/hooks/pic/cell/over/hook";
import { isNull } from "~/utils/validation/is/null";

export const resolvePositionFromCell =
  ({
    cell,
    size,
  }: TUseCellOverResult) => 
    isNull(cell)
      ? {}
      : {
          x: cell.column * size,
          top: cell.row * size,
          ...resolveSquare(size),
        };
