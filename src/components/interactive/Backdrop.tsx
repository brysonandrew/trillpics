import { resolveCompositeKey } from '@utils/keys';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC } from 'react';

const name = 'backdrop';

type TProps = {
  isHover: boolean | null;
  id: string;
};
export const Backdrop: FC<TProps> = ({
  isHover,
  id,
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
            opacity: 1,
            y: '100%',
          }}
          animate={{
            opacity: 1,
            y: '0%',
          }}
          exit={{
            opacity: 1,
            y: '100%',
          }}
          className='absolute -inset-1 bg-gray-01 backdrop-blur-lg'
        />
      )}
    </AnimatePresence>
  );
};
