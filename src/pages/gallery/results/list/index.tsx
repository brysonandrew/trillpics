import { FC } from 'react';
import { Empty } from './Empty';
import { TableInfinite } from '@components/table-infinite';
import { useColumns } from './columns/useColumns';
import { useResults } from '../context';
import { Header } from '../header';

export const List: FC = () => {
  const { rows, size } = useResults();
  const columns = useColumns(
    rows,
    size,
  );
  console.log(columns, rows, size);

  if (rows.length === 0) {
    return <Empty />;
  }

  return (
    <TableInfinite
      rows={rows}
      rowHeight={size}
      columns={columns}
      header={<Header />}
    />
  );
};
