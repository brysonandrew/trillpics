import styled from '@emotion/styled';
import { TDivMotionProps } from '@t/dom';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

export type TBaseProps =
  TDivMotionProps & {
    classValue?: ClassValue;
  };
export const VerticalFade: FC<
  TBaseProps
> = ({
  classValue,
  style,
  ...props
}) => (
  <Root
    className={clsx(
      'fixed left-0 right-0 w-full h-28 dark:from-black dark:opacity-100 from-white-9 opacity-50 to-transparent pointer-events-none z-40',
      classValue,
    )}
    style={style}
    {...props}
  />
);
