import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { TGradientShortcut } from '@uno/shortcuts/gradient';
import { TChildren } from '@brysonandrew/config-types';
import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';

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
        'center h-6 bg-main text-current border-2 border-current text-sm px-1.5 rounded-xl',
        isCircle && 'w-6',
        classValue,
        gradient,
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
};
