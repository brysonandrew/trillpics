import type {
  Row as TRow,
  Cell as TCell,
} from '@tanstack/react-table';
import type { ListChildComponentProps } from 'react-window';
import { Cell } from './Cell';
import { TBaseRow } from '../types';
import styled from '@emotion/styled';
import { Line } from '@components/layout/Line';

const Root = styled.li``;

type TProps<T> =
  ListChildComponentProps<TRow<T>[]>;
export const Row = <T extends TBaseRow>(
  props: TProps<T>,
) => {
  const { data, index, style } = props;
  const item = data[index];

  const cells = item.getVisibleCells();
  return (
    <>
      <Root
        className='row w-full'
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
      </Root>
    </>
  );
};
