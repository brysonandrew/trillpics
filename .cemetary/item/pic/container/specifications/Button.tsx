import { FC } from 'react';
import { B } from '@brysonandrew/interactive';
import clsx from 'clsx';
import { TButtonMotionProps } from '@brysonandrew/config-types';
import { Backdrop } from '../../../../../decoration/Backdrop';
import { resolveCompositeKey } from '@utils/keys';
import { Pill } from '@components/decoration/Pill';
import { TGradientShortcut } from '@uno/shortcuts/gradient';
import { motion } from 'framer-motion';
import { I } from '@brysonandrew/icons-i';
import {
  PLUS_ICON,
  TIMES_ICON,
} from '@brysonandrew/icons-keys/text';

type TProps = Omit<
  TButtonMotionProps,
  'title'
> & {
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
        'row gap-4 px-4 py-3 border-1-gray-04 mix-blend-difference overflow-hidden',
        classValue,
      )}
      look='neu-empty'
      {...rest}
      title='Add'
    >
      <Backdrop
        id={resolveCompositeKey(
          variant,
          'button',
        )}
        isShown={Boolean(isHover)}
      />
      <Pill
        gradient={gradient}
        classValue='relative aspect-square'
      >
        <I
          icon={
            {
              '+': PLUS_ICON,
              x: TIMES_ICON,
            }[iconChar]
          }
        />
      </Pill>
      <motion.span
        className={clsx(
          'relative text-lg',
        )}
        layout
      >
        {children}
      </motion.span>
    </B>
  );
};
