import type { FC } from 'react';
import styled from '@emotion/styled';
import { THUMB_SIZE } from './config';

const Root = styled.div``;

type TProps = {
  count: number;
};
export const Ticks: FC<TProps> = ({
  count,
}) => {
  return (
    <Root>
      <ul className='absolute left-0 bottom-0 right-0 row-space'>
        {[...Array(count - 1)].map(
          (_, index) => (
            <li
              key={`key-${index}`}
              className='absolute bottom-4.5 translate-y-0 h-1 w-px bg-highlight opacity-40'
              style={{
                left: `calc(${
                  (100 / count) *
                  (index + 1)
                }% - ${
                  THUMB_SIZE *
                    ((index + 1) /
                      count) -
                  THUMB_SIZE / 2
                }px)`,
              }}
            />
          ),
        )}
      </ul>
    </Root>
  );
};
