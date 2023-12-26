import type { FC } from 'react';
import {
  TUseImageReturn,
  TUseImageConfig,
  useImage,
} from './useImage';
import { motion } from 'framer-motion';
import { TChildren } from '@t/index';
import { Portal } from './Portal';

type TProps = TUseImageConfig & {
  boxChildren?: TChildren;
  children(
    imageReturn: TUseImageReturn,
  ): TChildren;
};
export const Image: FC<TProps> = ({
  boxChildren,
  children,
  ...config
}) => {
  const imageReturn = useImage(config);
  const {
    isFirstPosition,
    boxProps,
    backdropProps,
  } = imageReturn;

  const c = children(imageReturn);

  return (
    <motion.div {...boxProps}>
      <>
        {isFirstPosition ? (
          c
        ) : (
          <Portal>
            <>
              <motion.div
                {...backdropProps}
              />
              {c}
            </>
          </Portal>
        )}
      </>
      {boxChildren}
    </motion.div>
  );
};
