import { DELIMITER } from "~/pics/grid/pic/hooks/constants";
import { TCursorCell } from "~/context/cursor";

type TConfig = TCursorCell;
export const cellEncrypt = ({
  column,
  row,
}: TConfig) => {
  const x = String(column).padStart(
    4,
    "0"
  );
  const y = String(row).padStart(
    4,
    "0"
  );
  return `${x}${DELIMITER}${y}` as const;
};
