import type { FC } from 'react';
import styled from '@emotion/styled';
import { TDivMotionProps , TClassValueProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Root = styled(motion.kbd)``;

type TProps = TDivMotionProps &
  TClassValueProps;
export const Title: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  if (!children) return null;
  return (
    <Root
      className={clsx(
        'truncate grow',
        classValue,
      )}
      layout="preserve-aspect"
      {...props}
    >
      {children}
    </Root>
  );
};
