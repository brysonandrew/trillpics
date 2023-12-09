import styled from '@emotion/styled';
import { Cell } from './Cell';
import {
  TBaseRow,
  TPassedHeadProps,
} from '../../types';

const Root = styled.div``;

type TProps = TPassedHeadProps & {
  headers: any[];
};
export const Row = <
  T extends TBaseRow,
>({
  headers,
  onSortEnd,
  ...props
}: TProps) => {
  return (
    <Root>
      {headers.map(
        (
          header: any,
          index,
          { length },
        ) => {
          return (
            <Cell<T>
              key={`${header.id}-${index}`}
              header={header}
              count={length}
              {...props}
            />
          );
        },
      )}
    </Root>
  );
};
