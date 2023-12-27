import { FC } from 'react';
import { B } from '@components/interactive/B';
import clsx from 'clsx';
import { TButtonMotionProps } from '@t/dom';
import { Backdrop } from '../../../../../../../../components/decoration/Backdrop';
import { resolveCompositeKey } from '@utils/keys';
import { Circle } from '@components/decoration/Circle';
import { TGradientShortcut } from '@uno/shortcuts/gradient';
import { motion } from 'framer-motion';

type TProps = TButtonMotionProps & {
  variant: 'add' | 'remove';
  gradient: TGradientShortcut;
  iconChar: 'x' | '+';
  children: string;
  isHover?: boolean;
};
export const Button: FC<TProps> = (
  props,
) => {
  const {
    variant,
    gradient,
    isHover,
    iconChar,
    children,
    ...rest
  } = props;

  return (
    <B
      classValue={clsx(
        'gap-4 px-4 py-3 border-1-gray-02 overflow-hidden',
        variant === 'add'
          ? 'row'
          : 'row-reverse',
      )}
      look='neu-empty'
      {...rest}
    >
      <Backdrop
        id={resolveCompositeKey(
          variant,
          'button',
        )}
        isShown={Boolean(isHover)}
      />
      <Circle gradient={gradient} classValue='relative'>
        {iconChar}
      </Circle>
      <motion.samp
        className={clsx(
          'relative text-lg',
        )}
        layout
      >
        {children}
      </motion.samp>
    </B>
  );
};
