import { TUseImageReturn } from '@components/images/useImage';
import { TUseHoverKey } from '@hooks/cursor/useHoverKey';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC, Fragment } from 'react';
import { Text } from './Text';
import { Checkout } from './checkout';
import { Circle } from '@components/decoration/Circle';
import clsx from 'clsx';
import { TDisplay } from '@t/image';

type TProps = Pick<
  TDisplay,
  'name' | 'src'
> &
  Pick<TUseHoverKey, 'isHover'> & {
    isFirstPosition: boolean;
    isShown: boolean;
    style: TUseImageReturn['imageProps']['style'];
    isParentHover: boolean;
    onToggle(): void;
  };
export const Container: FC<TProps> = ({
  name,
  src,
  isFirstPosition,
  isShown,
  style,
  onToggle
}) => {
  const classValue =
    'absolute left-1/2 -translate-x-1/2 w-container';
  const Root = isFirstPosition
    ? Fragment
    : motion.div;
  const sharedStyle = {
    position: style.position,
    zIndex: style.zIndex,
  };

  return (
    <>
      <Root
        {...(isFirstPosition
          ? {}
          : {
              className: clsx(
                classValue,
                'top-0 pointer-events-none',
              ),
              style: {
                height: style.height,
                ...sharedStyle,
              },
            })}
      >
        <AnimatePresence>
          {typeof name !==
            'undefined' &&
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
            isFirstPosition && (
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
      <div
        className={clsx(
          classValue,
          'bottom-0',
        )}
        style={sharedStyle}
      >
        {!isFirstPosition && (
          <Checkout
            key='checkout'
            name={name}
            src={src}
            onToggle={onToggle}
          />
        )}
      </div>
    </>
  );
};
