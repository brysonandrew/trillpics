import { P1 } from '@components/layout/space/P1';
import { P6 } from '@components/layout/space/P6';
import styled from '@emotion/styled';
import { TError } from '@brysonandrew/config-types';
import { FC } from 'react';

const Root = styled.p``;

type TProps = {
  error?: TError;
};
export const Error: FC<TProps> = ({
  error,
}) => {
  if (error) {
    return (
      <>
        <P1 />
        <Root className='text-red text-sm h-8 shrink-0'>
          {error?.message}
        </Root>
        <P1 />
      </>
    );
  } else {
    return <P6 />;
  }
};
