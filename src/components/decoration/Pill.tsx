import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { TGradientShortcut } from '@uno/shortcuts/gradient';
import { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import { TSpanMotionProps } from '@t/dom';

type TProps = TSpanMotionProps & {
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
        'center h-5 text-section-inverted bg-section-inverted text-sm px-1.5 rounded-xl',
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
