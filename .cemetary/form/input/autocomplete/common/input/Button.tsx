import type { FC } from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { TButtonMotionProps } from '@brysonandrew/config-types';
import { motion } from 'framer-motion';

const Root = styled(motion.button)``;

type TProps = TButtonMotionProps;
export const Button: FC<TProps> = ({
  children,
  classValue,
  ...props
}) => (
  <Root
    className={clsx(
      'center w-8 h-8 rounded-full',
      classValue,
    )}
    type='button'
    layout={false}
    {...props}
  >
    {children}
  </Root>
);
