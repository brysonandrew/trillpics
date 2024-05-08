import { resolveSquare } from "@brysonandrew/measure";

export const DEFAULT_BOX_PADDING = 2;
type TConfig = {
  size: number;
  left: number;
  value?: number;
  halfValue?: number;
};
export const padBox = ({
  size,
  left,
  value = DEFAULT_BOX_PADDING,
  halfValue = value / 2,
}: TConfig) => ({
  left: left + halfValue,
  top: halfValue,
  ...resolveSquare(size - value),
});
export type TPadBoxResult = ReturnType<
  typeof padBox
>;
