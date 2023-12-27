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
import { Close } from './Close';
import { Checkout } from './checkout';

type TProps = Pick<
  TPassedProps,
  'name' | 'src'
> &
  TUseHoverKey & {
    isFirstPosition: boolean;
    isShown: boolean;
    style: TUseImageReturn['imageProps']['style'];
    isParentHover: boolean;
  };
export const Info: FC<TProps> = ({
  isHover,
  handlers,
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

        {isShown &&
          !isFirstPosition && (
            <Close
              key='close'
              src={src}
              style={sharedStyle}
              isHover={isHover}
              {...handlers}
            />
          )}
        <Checkout
          key='checkout'
          isFirstPosition={
            isFirstPosition
          }
          isHover={isHover}
          isParentHover={isParentHover}
          isShown={isShown}
          isInteraction={
            isParentHover ||
            isHover ||
            !isFirstPosition
          }
          src={src}
          sharedStyle={sharedStyle}
          handlers={handlers}
        />
      </AnimatePresence>
    </Root>
  );
};
