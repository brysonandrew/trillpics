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
import { TitleIconNav } from '@components/layout/text/nav/TitleIconNav';

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
  icon(isHover: boolean): TChildren;
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
    useHoverKey(cursorKey);

  return (
    <Root
      className='relative shrink-0 w-34 p-1 overflow-hidden'
      title={title}
      {...props}
      {...handlers}
      {...SHARED_ANIMATION_PROPS}
    >
      <div className='row gap-2 py-0 border-1-gray-02 pointer-events-none'>
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
        <TitleIconNav
          icon={<>{icon(isHover)}</>}
        >
          {children}
        </TitleIconNav>
      </div>
    </Root>
  );
};
