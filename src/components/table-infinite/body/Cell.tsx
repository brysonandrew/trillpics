import {
  Cell as TCell,
  flexRender,
} from '@tanstack/react-table';

type TProps<T> = {
  cell: TCell<T, unknown>;
  count: number;
};
export const Cell = <T extends object>({
  cell,
}: TProps<T>) => {
  const context = cell.getContext();
  const content = flexRender(
    cell.column.columnDef.cell,
    context,
  );

  return <>{content}</>;
};
