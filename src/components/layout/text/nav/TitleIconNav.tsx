import type {
  FC,
  PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';
import { TitleNav } from './TitleNav';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

type TProps = PropsWithChildren<{
  icon: JSX.Element;
}>;
export const TitleIconNav: FC<
  TProps
> = ({ icon, children }) => {
  return (
    <Root className='row gap-1' layout>
      <div className='center h-12 w-12 shink-0 grow-0'>
        {icon}
      </div>
      <TitleNav>{children}</TitleNav>
    </Root>
  );
};
