import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { TGradientShortcut } from '@uno/shortcuts/gradient';
import { TChildren } from '@t/index';
import { motion } from 'framer-motion';

type TProps = {
  classValue?: ClassValue;
  gradient?: TGradientShortcut;
  children: TChildren;
};
export const Circle: FC<TProps> = ({
  classValue,
  gradient,
  children,
}) => {
  return (
    <motion.samp
      className={clsx(
        'h-5 text-section-inverted bg-section-inverted text-sm px-1.5 rounded-xl',
        gradient,
        classValue,
      )}
      layout
    >
      {children}
    </motion.samp>
  );
};
