import { FC } from 'react';
import {
  motion,
  MotionProps,
} from 'framer-motion';
import { kebabToTitle } from '@utils/format';
import clsx from 'clsx';
import {
  TDivMotionProps,
  TSampMotionProps,
} from '@t/dom';
import { resolveCompositeKey } from '@utils/keys';

type TProps = TSampMotionProps & {
  src: string;
  name: string;
  isFirstPosition: boolean;
};
export const Text: FC<TProps> = ({
  src,
  name,
  isFirstPosition,
  ...props
}) => {
  return (
    <motion.samp
      className={clsx(
        'absolute pointer-events-none',
        isFirstPosition
          ? 'top-6 left-6 text-xl'
          : 'left-12 top-12 text-4xl',
      )}
      layoutId={resolveCompositeKey(
        'Text',
        src,
      )}
      {...props}
    >
      {kebabToTitle(name)}
    </motion.samp>
  );
};
