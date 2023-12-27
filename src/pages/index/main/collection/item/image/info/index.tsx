import { TUseImageReturn } from '@components/image/useImage';
import { FADE_PRESENCE } from '@constants/animation';
import { TUseHoverKey } from '@hooks/cursor/useHoverKey';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC, Fragment } from 'react';
import { TPassedProps } from '..';
import { Text } from './Text';
import { Checkout } from '../checkout';
import { Circle } from '@components/decoration/Circle';

type TProps = Pick<
  TPassedProps,
  'name' | 'src'
> &
  Pick<TUseHoverKey, 'isHover'> & {
    isFirstPosition: boolean;
    isShown: boolean;
    style: TUseImageReturn['imageProps']['style'];
    isParentHover: boolean;
  };
export const Info: FC<TProps> = ({
  isHover,
  name,
  src,
  isFirstPosition,
  isShown,
  style,
  isParentHover,
}) => {
  const Root = isFirstPosition
    ? Fragment
    : motion.div;
  const sharedStyle = {
    position: style.position,
    zIndex: style.zIndex,
  };
  return (
    <Root
      {...(isFirstPosition
        ? {}
        : {
            className:
              'absolute top-0 left-1/2 w-container -translate-x-1/2 pointer-events-none',
            style: {
              height: style.height,
              ...sharedStyle,
            },
            ...FADE_PRESENCE,
          })}
    >
      <AnimatePresence>
        {typeof name !== 'undefined' &&
          isShown && (
            <Text
              key='text'
              name={name}
              isFirstPosition={
                isFirstPosition
              }
              src={src}
              style={sharedStyle}
            />
          )}
        {isShown && isFirstPosition && (
          <Circle
            key='enter'
            classValue='absolute bottom-6 right-6 pointer-events-none'
            gradient='bg-green-emerald-teal'
          >
            +
          </Circle>
        )}
        {!isFirstPosition && (
          <>
            <Circle
              key='exit'
              classValue='absolute top-18 right-18 pointer-events-none'
              gradient='bg-fuchsia-pink-rose'
            >
              x
            </Circle>
        
          </>
        )}
      </AnimatePresence>
    </Root>
  );
};
