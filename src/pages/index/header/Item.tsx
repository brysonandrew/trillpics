import {
  AnimatePresence,
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { FC } from 'react';
import { Backdrop } from '@components/decoration/Backdrop';
import {
  TAnchorMotionProps,
  TButtonMotionProps,
} from '@t/dom';
import { TChildren } from '@t/index';
import { SHARED_ANIMATION_PROPS } from './config';
import { useScroll } from '@context/scroll';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { TCursorKey } from '@components/cursor/switch/config';
import { useDarkMode } from '@context/dark-mode';
import { resolveCompositeKey } from '@utils/keys';

type TProps = Omit<
  TButtonMotionProps &
    TAnchorMotionProps,
  'children'
> & {
  Root?: ForwardRefComponent<
    HTMLAnchorElement,
    HTMLMotionProps<'a'>
  >;
  title: string;
  cursorKey: TCursorKey;
  children: TChildren;
  icon: TChildren;
};
export const Item: FC<TProps> = ({
  title,
  icon,
  children,
  cursorKey,
  Root = motion.button,
  ...props
}) => {
  const { darkKey } = useDarkMode();
  const { isScroll } = useScroll();
  const { isHover, handlers } =
    useHoverKey(cursorKey, title);

  return (
    <Root
      className='relative shrink-0 w-34 p-1 overflow-hidden'
      title={title}
      {...props}
      {...handlers}
      {...SHARED_ANIMATION_PROPS}
    >
      <div className='row gap-2 py-0 text-sm border-1-gray-02 pointer-events-none'>
        <AnimatePresence>
          {!isScroll && (
            <motion.div
              key={resolveCompositeKey(
                title,
                darkKey,
                '--rotate',
              )}
              className='bg-main absolute -inset-4'
              style={{ rotate: 45 }}
            />
          )}
          {!isScroll && (
            <motion.div
              key={resolveCompositeKey(
                title,
                darkKey,
                '--border',
              )}
              className='absolute border-1-gray-01 inset-2'
            />
          )}
        </AnimatePresence>
        <Backdrop 
          id={title}
          isShown={isHover}
        />
        <div className='center h-12 w-12 shink-0 grow-0'>
          {icon}
        </div>
        <samp className='relative whitespace-nowrap tracking-widest'>
          {children}
        </samp>
      </div>
    </Root>
  );
};
