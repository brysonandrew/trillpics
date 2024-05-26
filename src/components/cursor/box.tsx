import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import clsx from 'clsx';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { DURATION } from '@brysonandrew/motion-config-constants';
import { useContextGrid } from '~/context';
import { boxRadius } from '~/constants/box/radius';

type TProps = TClassValueProps & {
  children: ReactNode;
  delay?: number;
  exitDelay?: number;
};
export const Box: FC<TProps> = ({
  classValue,
  children,
  delay = 0.7,
  exitDelay = 0,
}) => {
  const { main } = useContextGrid();
  const initExit = {
    opacity: 0,
    transition: {
      duration: DURATION * 2,
      delay: 0 + exitDelay,
    },
  };

  const borderRadius = boxRadius()

  return (
    <motion.div
      className={clsx(
        'absolute top-1/2 left-1/2 px-3 group',
        classValue
      )}
      style={{
        ...main.cursor.label,
        borderRadius
      }}
      initial={initExit}
      animate={{
        opacity: 1,
        transition: {
          duration: DURATION * 2,
          delay: delay,
        },
      }}
      exit={initExit}
    >
      {children}
    </motion.div>
  );
};
