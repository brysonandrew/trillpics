import { FC } from 'react';
import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { kebabToTitle } from '@utils/format';
import clsx from 'clsx';
import { resolveCompositeKey } from '@utils/keys';

type TProps = HTMLMotionProps<'h3'> & {
  src: string;
  name: string;
  isFirstPosition: boolean;
};
export const Text: FC<TProps> = ({
  src,
  name,
  isFirstPosition,
  children,
  ...props
}) => {
  return (
    <motion.h3
      className={clsx(
        'row absolute gap-2 mix-blend-difference pointer-events-none',
        isFirstPosition
          ? 'top-6 left-6 text-2xl'
          : 'left-12 top-12 text-4xl',
      )}
      {...props}
    >
      <>
        {kebabToTitle(name)}
        {children}
      </>
    </motion.h3>
  );
};
