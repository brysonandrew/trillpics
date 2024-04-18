import type { FC } from 'react';
import {
  TUseImageReturn,
  TUseImageConfig,
  useImage,
} from '../use-image';
import { motion } from 'framer-motion';
import { TChildren } from '@brysonandrew/config-types';
import { Portal } from './Portal';

type TProps = TUseImageConfig & {
  boxChildren?: TChildren;
  children(
    imageReturn: TUseImageReturn,
  ): TChildren;
};
export const Control: FC<TProps> = ({
  boxChildren,
  children,
  ...config
}) => {
  const imageReturn = useImage(config);
  const {
    isOpen,
    boxProps,
    backdropProps,
  } = imageReturn;
  const c = children(imageReturn);

  return (
    <motion.div {...boxProps}>
      <>
        {isOpen ? (
          <Portal>
            <>
              <motion.div
                {...backdropProps}
              />
              {c}
            </>
          </Portal>
        ) : (
          c
        )}
      </>
      {boxChildren}
    </motion.div>
  );
};
