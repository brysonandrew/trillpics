import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { GRADIENT, TGradientShortcut } from '@uno/shortcuts/gradient';
import { TChildren } from '@brysonandrew/config-types';
import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { GRADIENT_BLUE_PINK_YELLOW } from '@constants/css/gradient';

type TProps =
  HTMLMotionProps<'span'> & {
    classValue?: ClassValue;
    gradient?: TGradientShortcut;
    isCircle?: boolean;
    children: TChildren;
  };
export const Pill: FC<TProps> = ({
  isCircle,
  classValue,
  gradient,
  children,
  ...props
}) => {
  return (
    <motion.span
      className={clsx(
        'center h-6 text-current text-sm px-2 rounded-xl',
        isCircle && 'w-6',
        classValue,
        gradient,
      )}
      style={{backgroundImage:GRADIENT_BLUE_PINK_YELLOW}}
      {...props}
    >
      {children}
    </motion.span>
  );
};
