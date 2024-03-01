import type { FC } from 'react';
import { motion } from 'framer-motion';

export const ItemBackground: FC =
  () => {
    return (
      <motion.div
        variants={{
          animate: {
            opacity: 0.18,
          },
          hover: {
            opacity: 0.28,
          },
        }}
        className='absolute -left-1 -right-1 -top-0.5 -bottom-0.5 bg-primary rounded-md'
      />
    );
  };
