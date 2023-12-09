import { P16Y } from '@components/layout/space/P16Y';
import styled from '@emotion/styled';
import type { FC } from 'react';

const Root = styled.section``;

export type TFallbackProps = {
  error: Error;
  reset: () => void;
};
export const Fallback: FC<TFallbackProps> = () => (
  <Root className='w-full' role='alert'>
    <div className='column'>
      <P16Y />
      <h1 className='text-l'>Something went wrong</h1>
    </div>
  </Root>
);
