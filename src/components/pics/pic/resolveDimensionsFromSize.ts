type TConfig = {
  size: number;
  colIndex?: number;
  rowIndex?: number;
};
export const resolveConfigFromSize = ({
  size,
  colIndex = 0,
  rowIndex = 0,
}: TConfig) => ({
  width: size - 3,
  height: size,
  offsetX: size * colIndex, //rowIndex * size,
  offsetY: size * rowIndex, //rowIndex * size,
});
export type TResolveConfigFromSize =
  ReturnType<
    typeof resolveConfigFromSize
  >;
