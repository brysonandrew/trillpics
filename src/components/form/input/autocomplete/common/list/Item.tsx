import type { FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TItemPassedProps } from '.';
import clsx from 'clsx';

const Root = styled(motion.li)``;
type TProps = TItemPassedProps & {
  id?: string;
  index: number;
  value: string;
};
export const Item: FC<TProps> = ({
  value,
  children = value,
}) => (
  <Root
    className={clsx(
      'relative mt-1.5 mr-2.5 cursor-pointer xl:(mt-2.5 mr-4)',
    )}
    initial={false}
    animate='animate'
    whileHover='hover'
  >
    {children}
  </Root>
);
