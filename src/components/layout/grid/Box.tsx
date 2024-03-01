import { FC } from 'react';
import styled from '@emotion/styled';
import { TElementProps } from '@brysonandrew/config-types';

const Root = styled.li``;

type TProps = TElementProps;
export const Box: FC<TProps> = ({
  children,
  ...props
}) => {
  return (
    <Root
      className='relative'
      {...props}
    >
      {children}
    </Root>
  );
};
