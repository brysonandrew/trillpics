import type { FC } from 'react';
import {
  TButtonMotionProps,
  TClassValueProps,
} from '@brysonandrew/config-types';
import clsx from 'clsx';
import { I } from '@brysonandrew/icons-i';
import { B } from '@brysonandrew/interactive'
``;

export type TProps =
  TButtonMotionProps &
    TClassValueProps & {
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
      {...props}
    >
      <I icon={icon} />
    </B>
  );
};
