import { TUseImageReturn } from '@components/image/useImage';
import { FADE_PRESENCE } from '@constants/animation';
import { TUseHoverKey } from '@hooks/cursor/useHoverKey';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC, Fragment } from 'react';
import { TPassedProps } from '..';
import { Add } from './Add';
import { Text } from './Text';

type TProps = Pick<
  TPassedProps,
  'name' | 'src'
> &
  TUseHoverKey & {
    isFirstPosition: boolean;
    isShown: boolean;
    style: TUseImageReturn['imageProps']['style'];
  };
export const Info: FC<TProps> = ({
  isHover,
  handlers,
  name,
  src,
  isFirstPosition,
  isShown,
  style,
}) => {
  const Root = isFirstPosition
    ? Fragment
    : motion.div;
  return (
    <Root
      {...(isFirstPosition
        ? {}
        : {
            className:
              'absolute top-0 left-1/2 w-container -translate-x-1/2 pointer-events-none',
            style: {
              height: style.height,
              zIndex: style.zIndex,
            },
            ...FADE_PRESENCE,
          })}
    >
      <AnimatePresence>
        {typeof name !== 'undefined' &&
          isShown && (
            <Text
              key={name}
              name={name}
              isFirstPosition={
                isFirstPosition
              }
              src={src}
              style={{
                position:
                  style.position,
                zIndex: style.zIndex,
              }}
            />
          )}
        {isShown && (
          <Add
            key='add'
            isFirstPosition={
              isFirstPosition
            }
            src={src}
            style={{
              position: style.position,
              zIndex: style.zIndex,
            }}
            isHover={isHover}
            {...handlers}
          />
        )}
      </AnimatePresence>
    </Root>
  );
};
