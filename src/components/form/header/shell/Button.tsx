import type { FC } from 'react';
import { B } from '@components/interactive/B';
import { TButtonProps } from '@t/dom';
import clsx from 'clsx';
import { I } from '@components/Icon';

export type TProps = TButtonProps & {
  title: string;
  icon: string;
};
export const Button: FC<TProps> = ({
  classValue,
  icon,
  ...props
}) => {
  return (
    <B
      classValue={clsx(
        'center w-7 h-7 shrink-0',
        classValue,
      )}
      type='button'
      {...props}
    >
      <I icon={icon} />
    </B>
  );
};
