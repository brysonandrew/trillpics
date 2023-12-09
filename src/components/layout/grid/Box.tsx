import { FC } from 'react';
import styled from '@emotion/styled';
import { TLiProps } from '@t/dom';

const Root = styled.li``;

type TProps = TLiProps;
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
