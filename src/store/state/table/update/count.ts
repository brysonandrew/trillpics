import { APPROX_IMAGE_SIZE } from "~/constants/images";
import { TTableCountConfig } from "~/store/state/table/types";
import precacheTable from "~app/precache.json";
const { length: cellsCount } =
  precacheTable;

export const tableUpdateCount = ({
  width,
}: TTableCountConfig) => {
  const columnsCount = Math.ceil(
    width / APPROX_IMAGE_SIZE
  );
  const rowsCount = Math.ceil(
    (cellsCount ?? 0) / columnsCount
  );
  return {
    rows: rowsCount,
    columns: columnsCount,
  };
};
export type TTableUpdateCountResult =
  ReturnType<typeof tableUpdateCount>;
