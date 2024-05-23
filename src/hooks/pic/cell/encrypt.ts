import { TCell } from "~/pics/grid/pic";
import { DELIMITER_CELL_KEY } from "~/hooks/pic/constants";
import { isNull } from "~/utils/validation/is/null";

type TConfig = TCell | null;
export const cellEncrypt = (
  config: TConfig
) => {
  if (isNull(config)) return null;
  const { column, row } = config;
  const x = String(column).padStart(
    4,
    "0"
  );
  const y = String(row).padStart(
    4,
    "0"
  );
  return `${x}${DELIMITER_CELL_KEY}${y}` as const;
};
