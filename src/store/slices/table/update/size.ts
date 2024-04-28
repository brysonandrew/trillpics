import { TTableSizeConfig } from "~/store/slices/table/types";

export const tableUpdateSize = ({
  columnsCount,
  ...screen
}: TTableSizeConfig) => {
  const nextSize = Math.floor(
    screen.width / columnsCount
  );
  return nextSize;
};
