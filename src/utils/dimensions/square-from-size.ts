import { resolveSquare } from "@brysonandrew/measure";
import {
  TCursor,
  TCursorCell,
} from "~/pics/virtualize/context";

type TConfig = TCursorCell & {
  size: number;
};
export const squareFromSize = ({
  size,
  cell,
}: TConfig) => ({
  ...resolveSquare(size),
  offsetX: size * cell.column, 
  offsetY: size * cell.row,
});
export type TSquareFromSize =
  ReturnType<typeof squareFromSize>;

export type TSquareFromSizeConfig =
  TConfig;
