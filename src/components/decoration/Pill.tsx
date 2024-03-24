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
        'center h-5 bg-main text-current border border-main text-sm px-1.5 rounded-xl',
        isCircle && 'w-5',
        classValue,
        gradient,
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
};
