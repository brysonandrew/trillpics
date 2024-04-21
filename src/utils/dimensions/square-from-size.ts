import { resolveSquare } from "@brysonandrew/measure";

type TConfig = {
  size: number;
  colIndex?: number;
  rowIndex?: number;
};
export const squareFromSize = ({
  size,
  colIndex = 0,
  rowIndex = 0,
}: TConfig) => ({
  ...resolveSquare(size),
  offsetX: size * colIndex, //rowIndex * size,
  offsetY: size * rowIndex, //rowIndex * size,
});
export type TSquareFromSize =
  ReturnType<typeof squareFromSize>;

export type TSquareFromSizeConfig =
  TConfig;
