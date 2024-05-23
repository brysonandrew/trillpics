import { resolveSquare } from "@brysonandrew/measure";
import { TCell } from "~/pics/grid/pic";

type TConfig = TCell & {
  size: number;
};
export const squareFromSize = ({
  size,
  row,column
}: TConfig) => ({
  ...resolveSquare(size),
  offsetX: size * column,
  offsetY: size * row,
});
export type TSquareFromSize =
  ReturnType<typeof squareFromSize>;

export type TSquareFromSizeConfig =
  TConfig;
