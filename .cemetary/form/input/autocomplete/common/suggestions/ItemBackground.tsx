import type { FC } from 'react';
import { motion } from 'framer-motion';

export const ItemBackground: FC =
  () => {
    return (
      <motion.div
        variants={{
          animate: {
            opacity: 0.6,
          },
          hover: {
            opacity: 1,
          },
        }}
        className='absolute -left-1 -right-1 -top-0.5 -bottom-0.5 bg-black-3 rounded-md'
      />
    );
  };
