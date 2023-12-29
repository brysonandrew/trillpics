import styled from '@emotion/styled';
import {
  TButtonMotionProps,
  TClassValueProps,
} from '@t/dom';
import { TInteractiveProps } from '@t/css/interactive';
import clsx from 'clsx';
import { FC } from 'react';
import { motion } from 'framer-motion';

const Root = styled(motion.button)``;

export type TProps =
  TButtonMotionProps &
    TClassValueProps &
    TInteractiveProps;
export const B: FC<TProps> = ({
  classValue,
  children,
  shape = 'interactive-rect',
  look = 'interactive-bg-backdrop-border-04',
  ...props
}) => {
  return (
    <Root
      type='button'
      className={clsx(
        'interactive',
        look,
        shape,
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
