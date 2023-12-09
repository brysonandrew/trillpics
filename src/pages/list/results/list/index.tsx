import { FC } from 'react';
import { useResults } from '@pages/list/results/context';
import { Empty } from './Empty';
import { TableInfinite } from '@components/table-infinite';
import { useColumns } from './columns/useColumns';
import { Header } from '@pages/list/results/header';

export const List: FC = () => {
  const { rows, size } = useResults();
  const columns = useColumns(
    rows,
    size,
  );

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
