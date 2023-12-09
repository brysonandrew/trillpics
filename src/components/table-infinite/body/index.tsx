import type {
  Row as TRow,
  RowModel,
} from '@tanstack/react-table';
import AutoSizer from 'react-virtualized-auto-sizer';
import type { ListChildComponentProps } from 'react-window';
import { FixedSizeList } from 'react-window';
import { Row } from './Row';
import {
  Shell,
  Context,
} from './shell';
import { TBaseRow } from '../types';

const RenderRow = <T extends TBaseRow>(
  props: ListChildComponentProps<
    TRow<T>[]
  >,
) => {
  return (
    <Row<T>
      {...props}
    />
  );
};

type TProps<T> = {
  table: any;
  header: JSX.Element;
  emptyProps: any;
  rowHeight: number;
};
export const Body = <
  T extends TBaseRow,
>({
  table,
  header,
  emptyProps,
  rowHeight,
}: TProps<T>) => {
  const rowModel: RowModel<T> =
    table.getRowModel();
  const rows: TRow<T>[] = rowModel.rows;
  return (
    <Context.Provider
      value={{
        header,
        emptyProps,
        rowHeight,
      }}
    >
      <AutoSizer>
        {({ width, height }: any) => (
          <FixedSizeList<TRow<T>[]>
            width={width}
            height={height}
            innerTagName='ul'
            itemCount={rows.length}
            itemData={rows.map(
              (row: TRow<T>) => row,
            )}
            itemSize={rowHeight}
            itemKey={(
              index: number,
              data: any,
            ) => {
              const key =
                data[index].id;
              return key;
            }}
            layout='vertical'
          >
            {RenderRow}
          </FixedSizeList>
        )}
      </AutoSizer>
    </Context.Provider>
  );
};
