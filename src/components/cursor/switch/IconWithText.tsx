import { motion } from 'framer-motion';
import { FC } from 'react';
import { TBaseIconProps } from '@t/icons';
import { TRANSITION } from '@constants/animation';
import { Line } from '@components/layout/Line';
import { I } from '@components/Icon';

export type TProps = {
  children: string;
  icon?: 'material-symbols:close' | 'lets-icons:view-fill';
  Icon?: FC<TBaseIconProps>;
};
export const IconWithText: FC<
  TProps
> = ({ icon, Icon, children }) => {
  return (
    <>
      <motion.div className='relative row gap-4 bg-main border-1-gray-04 z-50'>
        {Icon && (
          <Icon classValue='w-4 h-4' />
        )}
        {icon && <I icon={icon} />}
        <motion.samp
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ...TRANSITION,
              delay: 0.4,
            },
          }}
          className='text-xl whitespace-nowrap'
        >
          {children}
        </motion.samp>
        {/* <Line className='absolute left-0 bottom-0 w-full bg-current' /> */}
      </motion.div>
    </>
  );
};
