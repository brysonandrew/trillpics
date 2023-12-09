import { FC, createElement } from 'react';
import { clsx } from 'clsx';
import { TAmount, TSpaceProps } from './config';

type TProps = TSpaceProps & {
  spaceClass: `p-${TAmount}` | `py-${TAmount}`;
};
export const Space: FC<TProps> = ({
  element = 'div',
  spaceClass,
  classValue,
  children,
  ...props
}) => {
  return createElement(
    element,
    { className: clsx(spaceClass, classValue), ...props },
    children,
  );
};
