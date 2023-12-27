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
        'h-5 leading-none text-section-inverted bg-section-inverted text-sm px-0.97 py-0.5 rounded-xl',
        gradient,
        classValue,
      )}
      layout
    >
      {children}
    </motion.samp>
  );
};
