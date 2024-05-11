import { DELIMITER_CELL_KEY } from "~/hooks/pic/constants";
import { isNull } from "~/utils/validation/is/null";

export const cellDecrypt = (
  key: string | null
) => {
  if (isNull(key)) return null;
  const [x, y] = key
    .split(DELIMITER_CELL_KEY)
    .map(Number);

  return { column: x, row: y };
};
