import type { FC } from 'react';
import {
  TUseImageReturn,
  TUseImageConfig,
  useImage,
} from './useImage';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { TChildren } from '@t/index';
import { Portal } from './Portal';

type TProps = TUseImageConfig & {
  boxChildren?: TChildren;
  children(
    imageProps: TUseImageReturn['imageProps'],
  ): TChildren;
};
export const Image: FC<TProps> = ({
  boxChildren,
  children,
  ...config
}) => {
  const {
    isFirstPosition,
    boxProps,
    imageProps,
    backdropProps,
  } = useImage(config);

  const c = children(imageProps);

  return (
    <motion.div {...boxProps}>
      <>
        {isFirstPosition ? (
          c
        ) : (
          <Portal
            backdropProps={
              backdropProps
            }
          >
            {c}
          </Portal>
        )}
      </>
      {boxChildren}
    </motion.div>
  );
};
