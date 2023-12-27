import { FC } from 'react';
import { B } from '@components/interactive/B';
import clsx from 'clsx';
import { TButtonMotionProps } from '@t/dom';
import { Backdrop } from '../../../../../../../../components/decoration/Backdrop';
import { resolveCompositeKey } from '@utils/keys';
import { Circle } from '@components/decoration/Circle';
import { FADE_PRESENCE } from '@constants/animation';
import { TGradientShortcut } from '@uno/shortcuts/gradient';
import { motion } from 'framer-motion';

export type TPassedProps = {
  isHover: boolean | null;
  isParentHover: boolean;
  isFirstPosition: boolean;
  isInteraction: boolean;
  src: string;
};

type TProps = TButtonMotionProps &
  TPassedProps & {
    variant: 'add' | 'remove';
    gradient: TGradientShortcut;
    iconChar: 'x' | '+';
    children: string;
  };
export const Button: FC<TProps> = (
  props,
) => {
  const {
    isInteraction,
    variant,
    gradient,
    isParentHover,
    isHover,
    src,
    isFirstPosition,
    iconChar,
    children,
    ...rest
  } = props;

  const key = resolveCompositeKey(
    variant,
    src,
  );

  return (
    <B
      classValue={clsx(
        'gap-4 px-4 py-3 border-1-gray-02 overflow-hidden',
        variant === 'add'
          ? 'row'
          : 'row-reverse',
      )}
      look='neu-empty'
      layoutId={key}
      {...rest}
    >
      <Backdrop
        id={resolveCompositeKey(
          variant,
          'button',
          key,
        )}
        isShown={Boolean(isHover)}
      />
      <Circle
        classValue='relative'
        gradient={
          isInteraction
            ? gradient
            : 'bg-light-lighter'
        }
      >
        {iconChar}
      </Circle>
      <motion.samp
        className={clsx(
          'relative',
          isFirstPosition
            ? 'text-sm'
            : 'text-lg',
        )}
        layout
      >
        {children}
      </motion.samp>
    </B>
  );
};
