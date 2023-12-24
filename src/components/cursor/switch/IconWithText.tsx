import { motion } from 'framer-motion';
import { FC } from 'react';
import { TBaseIconProps } from '@t/icons';
import { TRANSITION } from '@constants/animation';
import { Line } from '@components/layout/Line';

type TProps = {
  children: string;
  Icon?: FC<TBaseIconProps>;
};
export const IconWithText: FC<TProps> = ({
  Icon,
  children,
}) => {
  return (
    <>
      <motion.div className='relative text-color-5 row gap-4 z-50'>
        {Icon && (
          <>
            <Icon classValue='w-4 h-4' />
          </>
        )}
        <motion.code
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...TRANSITION, delay: 0.4 },
          }}
          className='text-xl whitespace-nowrap'
        >
          {children}
        </motion.code>
        <Line className='absolute left-0 bottom-0 w-full via-current' />
      </motion.div>
    </>
  );
};
