import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  CELL_HEAD_GROW_PROPS,
  THeader,
} from '../config';

const Root = styled.div``;

export const ProcessorHeader: FC<
  THeader
> = (cell: THeader) => {
  return (
    <Root {...CELL_HEAD_GROW_PROPS}>
      Name
    </Root>
  );
};
