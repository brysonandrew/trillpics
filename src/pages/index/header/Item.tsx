import {
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { FC } from 'react';
import { useHoverKey } from '@hooks/dom/useHoverKey';
import { resolveCompositeKey } from '@utils/keys';
import { Backdrop } from '@components/decoration/Backdrop';
import {
  TAnchorMotionProps,
  TButtonMotionProps,
} from '@t/dom';
import { TChildren } from '@t/index';
import { SHARED_ANIMATION_PROPS } from './config';

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
  children: TChildren;
  icon: TChildren;
};
export const Item: FC<TProps> = ({
  title,
  icon,
  children,
  Root = motion.button,
  ...props
}) => {
  const { isHover, handlers } =
    useHoverKey();
  const hoverkey = resolveCompositeKey(
    'dark-mode',
    title,
  );

  return (
    <Root
      className='relative shrink-0'
      title={title}
      {...props}
      {...handlers(hoverkey)}
      {...SHARED_ANIMATION_PROPS}
    >
      <div className='row-right gap-4 w-31 pr-3 py-4 overflow-hidden text-sm pointer-events-none'>
        <Backdrop
          id={title}
          isHover={isHover(hoverkey)}
        />
        {icon}
        <samp className='relative whitespace-nowrap tracking-widest'>
          {children}
        </samp>
      </div>
    </Root>
  );
};
