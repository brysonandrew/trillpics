import { TButtonProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import type { FC } from 'react';

type TProps = TButtonProps
export const PlaybackButton: FC<TProps> =  ({classValue, children, ...props})=> {
  return (
    <button className={cx('relative w-6 h-6 flex items-center justify-center', classValue)} {...props}>
      {children}
    </button>
  );
};
