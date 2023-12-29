import { FC } from 'react';
import { B } from '@components/interactive/B';
import clsx from 'clsx';
import {
  TButtonMotionProps,
  TClassValueProps,
} from '@t/dom';
import { Backdrop } from '../../../../../decoration/Backdrop';
import { resolveCompositeKey } from '@utils/keys';
import { Circle } from '@components/decoration/Circle';
import { TGradientShortcut } from '@uno/shortcuts/gradient';
import { motion } from 'framer-motion';
import { I } from '@components/Icon';
import {
  PLUS_ICON,
  TIMES_ICON,
} from '@constants/icons/text';

type TProps = TClassValueProps &
  TButtonMotionProps & {
    variant: 'add' | 'remove';
    gradient: TGradientShortcut;
    iconChar: 'x' | '+';
    isHover?: boolean;
  };
export const Button: FC<TProps> = (
  props,
) => {
  const {
    classValue,
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
        'row gap-4 px-4 py-3 border-1-gray-02 overflow-hidden',
        classValue,
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
      <Circle
        gradient={gradient}
        classValue='relative'
      >
        {
          {
            '+': <I icon={PLUS_ICON} />,
            x: <I icon={TIMES_ICON} />,
          }[iconChar]
        }
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
