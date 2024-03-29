import type {
  Row as TRow,
  Cell as TCell,
} from '@tanstack/react-table';
import type { ListChildComponentProps } from 'react-window';
import { Cell } from './Cell';
import { TBaseRow } from '../types';

type TProps<T> =
  ListChildComponentProps<TRow<T>[]>;
export const Row = <T extends TBaseRow>(
  props: TProps<T>,
) => {
  const { data, index, style } = props;
  const item = data[index];

  const cells = item.getVisibleCells();
  return (
      <div
        className='row'
        style={{
          ...style,
        }}
      >
        {cells.map(
          (
            cell: TCell<T, unknown>,
            cellIndex,
            { length },
          ) => {
            return (
              <Cell
                key={`${cell.id}-${cellIndex}`}
                cell={cell}
                count={length}
              />
            );
          },
        )}
      </div>
  );
};
