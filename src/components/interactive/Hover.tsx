import type { FC } from 'react';
import { TChildren } from '@t/index';
import { useHover } from '@hooks/dom/useHover';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@t/dom';

type TProps = Omit<
  TDivMotionProps,
  'children'
> & {
  children(
    isHover: boolean | null,
  ): TChildren;
};
export const Hover: FC<TProps> = ({
  children,
  ...props
}) => {
  const { isHover, ...handlers } =
    useHover();
  return (
    <motion.div
      {...handlers}
      {...props}
    >
      {children(isHover)}
    </motion.div>
  );
};
