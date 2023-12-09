import styled from '@emotion/styled';
import { FC } from 'react';

const Root = styled.header``;

export const Header: FC = () => {
  return <Root className='fixed top-0 left-0 w-full h-0 z-10'></Root>;
};
