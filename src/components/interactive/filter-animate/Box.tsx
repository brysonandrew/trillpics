import styled from '@emotion/styled';
import { TDivMotionProps } from '@t/dom';
import { TChildren, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps &
  TClassValueProps & {
    children?: TChildren;
  };
export const Box: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'relative glow-interactive',
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
