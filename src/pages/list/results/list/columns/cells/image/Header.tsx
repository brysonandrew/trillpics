import { motion } from 'framer-motion';
import type { FC } from 'react';
import { View } from './view';

type TProps = { id: string };
export const Header: FC<TProps> = ({
  id,
}) => {
  return (
    <motion.header
      className='flex-space gap-1 absolute top-2 left-2 h-0 w-full'
      variants={{
        animate: {
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        },
        hover: {
          opacity: 1,
          display: 'flex',
        },
      }}
    >
      <View id={id} />
    </motion.header>
  );
};
