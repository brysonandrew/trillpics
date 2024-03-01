import { TDivProps } from '@brysonandrew/config-types';
import { flexRender } from '@tanstack/react-table';

type TProps<T> = TDivProps & any;
export const Cell = <T extends object>(
  props: TProps<T>,
) => {
  const { header } = props;
  const title = flexRender(
    header.column.columnDef.header,
    header.getContext(),
  );

  return <>{title}</>;
};
