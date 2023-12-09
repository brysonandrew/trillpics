import clsx from 'clsx';
import { FC } from 'react';
import { TInteractiveProps } from '@t/css/interactive';
import { B } from './B';
import { TButtonProps } from '@t/dom';
import { I } from '@components/Icon';

type TProps = TButtonProps & {
  isActive?: boolean;
  icon: string;
} & TInteractiveProps;
export const BSm: FC<TProps> = ({
  isActive,
  icon,
  shape = 'interactive-rect-sm',
  look = 'neu-flat-risen',
  classValue,
  ...props
}) => {
  return (
    <B
      classValue={clsx(
        isActive &&
          'interactive-active',
        classValue,
      )}
      shape={shape}
      look={look}
      {...props}
    >
      <I icon={icon} />
    </B>
  );
};
