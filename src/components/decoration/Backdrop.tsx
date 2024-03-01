import {
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/config-types';
import clsx from 'clsx';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC } from 'react';

type TProps = TDivMotionProps &
  TClassValueProps & {
    isShown: boolean;
    id: string;
  };
export const Backdrop: FC<TProps> = ({
  isShown,
  id,
  classValue,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          key={id}
          initial={{
            opacity: 0.0,
            y: '100%',
          }}
          animate={{
            opacity: 0.05,
            y: '0%',
          }}
          exit={{
            opacity: 0.0,
            y: '100%',
          }}
          className={clsx(
            'absolute inset-1 bg-gray-5 shadow-1-gray-04 pointer-events-none',
            classValue,
          )}
          {...props}
        />
      )}
    </AnimatePresence>
  );
};
