
import { FC, createElement } from 'react';
import { clsx } from 'clsx';
import { TTextProps } from './config';

type TProps = TTextProps
export const Text: FC<TProps> = ({ element = 'h4', classValue, children, ...props }) => {
  return createElement(element, { className: clsx(classValue), ...props }, children);
};
