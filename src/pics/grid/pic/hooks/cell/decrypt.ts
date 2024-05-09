import { TCell } from "~/pics/grid/pic";
import { DELIMITER } from "~/pics/grid/pic/hooks/constants";

export const cellDecrypt = (
  key: string
): TCell => {
  const [x, y] = key
    .split(DELIMITER)
    .map(Number);

  return { column: x, row: y };
};
