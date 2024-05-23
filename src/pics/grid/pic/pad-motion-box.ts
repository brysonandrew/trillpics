import { resolveSquare } from "@brysonandrew/measure";

export const DEFAULT_BOX_PADDING = 2;
type TConfig = {
  size: number;
  x: number;
  y?: number;
  value?: number;
  halfValue?: number;
};
export const padMotionBox = ({
  size,
  x,
  y = 0,
  value = DEFAULT_BOX_PADDING,
  halfValue = value / 2,
}: TConfig) => ({
  x: x + halfValue,
  y: y + halfValue,
  ...resolveSquare(size - value),
});
