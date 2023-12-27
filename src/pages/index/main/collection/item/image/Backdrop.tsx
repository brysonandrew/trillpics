import { Backdrop as _Backdrop } from '@components/decoration/Backdrop';
import { TUseImageReturn } from '@components/image/useImage';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC } from 'react';
import { TPassedProps } from '.';

type TProps = Pick<
  TPassedProps,
  'name' | 'src'
> & {
  isShown: boolean;
  isFirstPosition: boolean;
  fullScreenBackdropProps: TUseImageReturn['backdropProps'];
};
export const Backdrop: FC<TProps> = ({
  isShown,
  src,
  isFirstPosition,
  fullScreenBackdropProps,
}) => {
  return (
    <AnimatePresence>
      {isFirstPosition ? (
        <_Backdrop
          key='backdrop-hover'
          id={src}
          isShown={isShown}
          layoutId='backdrop'
        />
      ) : (
        <motion.div
          key='backdrop-fullscreen'
          
          layoutId='backdrop'
          {...fullScreenBackdropProps}
        />
      )}
    </AnimatePresence>
  );
};
