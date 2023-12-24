import type { FC } from 'react';
import { TUseImageReturn } from './useImage';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { TChildren } from '@t/index';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';

type TProps = {
  backdropProps?: TUseImageReturn['backdropProps'];
  children: TChildren;
};
export const Portal: FC<TProps> = ({
  backdropProps,
  children,
}) => {
  useFreezeScrollBar();

  return (
    <>
      {createPortal(
        <>
          <motion.div
            {...backdropProps}
          />
          {children}
        </>,
        document.body,
      )}
    </>
  );
};
