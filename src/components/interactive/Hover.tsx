import type { FC } from 'react';
import { TChildren } from '@t/index';
import { useHover } from '@hooks/dom/useHover';
import { motion } from 'framer-motion';

type TProps = {
  children(
    isHover: boolean | null,
  ): TChildren;
};
export const Hover: FC<TProps> = ({
  children,
}) => {
  const { isHover, ...handlers } =
    useHover();
  return (
    <motion.div {...handlers}>
      {children(isHover)}
    </motion.div>
  );
};
