import { FC } from 'react';
import { motion } from 'framer-motion';
import { kebabToTitle } from '@utils/format';
import clsx from 'clsx';
import { TSampMotionProps } from '@t/dom';
import { resolveCompositeKey } from '@utils/keys';
import { FADE_PRESENCE } from '@constants/animation';

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
          ? 'top-6 left-6 text-2xl'
          : 'left-12 top-12 text-4xl',
      )}
      layoutId={resolveCompositeKey(
        'Text',
        src,
      )}
      {...props}
      {...FADE_PRESENCE}
    >
      {kebabToTitle(name)}
    </motion.samp>
  );
};
