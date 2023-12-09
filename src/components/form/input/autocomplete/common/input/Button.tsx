import type { FC } from 'react';
import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { TButtonMotionProps } from '@t/dom';
import { motion } from 'framer-motion';

const Root = styled(motion.button)``;

type TProps = TButtonMotionProps & {
  classValue?: ClassValue;
};
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
