import type { FC } from 'react';
import styled from '@emotion/styled';
import { Background } from './Background';
import {
  TCell,
  CELL_GROW_PADDING_PROPS,
} from '../config';

const Root = styled.div``;

export const Processor: FC<TCell> = (
  cell: TCell,
) => {
  return (
    <Root {...CELL_GROW_PADDING_PROPS}>
      <Background />
    </Root>
  );
};
