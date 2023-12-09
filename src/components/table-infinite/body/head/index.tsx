import styled from '@emotion/styled';
import type { HeaderGroup } from '@tanstack/react-table';
import {
  TTable,
  TBaseRow,
  TPassedHeadProps,
} from '../../types';
import { Row } from './Row';

const Root = styled.div``;

type TProps<T> = TPassedHeadProps & {
  table: TTable<T>;
};
export const Head = <
  T extends TBaseRow,
>({
  table,
  ...props
}: TProps<T>) => {
  const headerGroupItems: HeaderGroup<T>[] =
    table.getHeaderGroups();

  return (
    <Root className='sticky top-0 z-20 bg-black-05 backdrop-blur-lg'>
      {headerGroupItems.map(
        (
          headerGroup: HeaderGroup<T>,
        ) => {
          return (
            <Row
              key={headerGroup.id}
              headers={
                headerGroup.headers
              }
              {...props}
            />
          );
        },
      )}
    </Root>
  );
};
