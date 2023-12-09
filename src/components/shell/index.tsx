import styled from '@emotion/styled';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { Footer } from './footer';
import { Header } from './header';

const Root = styled.div``;
const Content = styled.div``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({
  children,
}) => {
  return (
    <Root className='relative overflow-x-hidden z-10'>
      <Header />
      <Content className='relative z-0'>
        {children}
      </Content>
      <Footer />
    </Root>
  );
};
