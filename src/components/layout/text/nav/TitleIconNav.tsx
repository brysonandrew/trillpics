import type {
  FC,
  PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TChildren } from '@brysonandrew/config-types';

const Root = styled(motion.div)``;

type TProps = PropsWithChildren<{
  icon: TChildren;
}>;
export const TitleIconNav: FC<
  TProps
> = ({ icon, children }) => {
  return (
    <Root className='row gap-1' layout>
      <div className='center h-12 w-12 shink-0'>
        {icon}
      </div>
      {/* <TitleNav>{children}</TitleNav> */}
    </Root>
  );
};
