import { TDivMotionProps } from '@t/dom';
import { resolveCompositeKey } from '@utils/keys';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC } from 'react';

const name = 'backdrop';

type TProps = TDivMotionProps & {
  isHover: boolean | null;
  id: string;
};
export const Backdrop: FC<TProps> = ({
  isHover,
  id,
  ...props
}) => {
  const key = resolveCompositeKey(
    name,
    id,
  );
  return (
    <AnimatePresence>
      {isHover && (
        <motion.div
          key={key}
          layoutId={name}
          initial={{
            opacity: 0.0,
            y: '100%',
          }}
          animate={{
            opacity: 0.1,
            y: '0%',
          }}
          exit={{
            opacity: 0.0,
            y: '100%',
          }}
          className='absolute inset-1 bg-gray-5 shadow-1-gray-04 pointer-events-none'
          {...props}
        />
      )}
    </AnimatePresence>
  );
};
