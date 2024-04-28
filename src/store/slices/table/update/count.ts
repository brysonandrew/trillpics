import { APPROX_IMAGE_SIZE } from "~/constants/images";
import { TTableCountConfig } from "~/store/slices/table/types";
import precacheTable from "~app/precache.json";
const { length: tableCount } =
  precacheTable;

export const tableUpdateCount = ({
  width,
}: TTableCountConfig) => {
  const columnsCount = Math.ceil(
    width / APPROX_IMAGE_SIZE
  );
  const rowsCount = Math.ceil(
    tableCount / columnsCount
  );
  return { rowsCount, columnsCount };
};
export type TTableUpdateCountResult =
  ReturnType<typeof tableUpdateCount>;
