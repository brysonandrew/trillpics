import clsx from 'clsx';
import { FC } from 'react';
import { TInteractiveProps } from '@/types/css/interactive';
import { B } from '@brysonandrew/interactive';
import { I } from '@brysonandrew/icons-i';
import { TButtonMotionProps } from '@brysonandrew/config-types';

type TProps = TButtonMotionProps & {
  isActive?: boolean;
  icon: string | JSX.Element;
} & TInteractiveProps;
export const BSm: FC<TProps> = ({
  isActive,
  icon,
  shape = 'interactive-rect-sm',
  look,
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
      {typeof icon === 'string' ? (
        <I icon={icon} />
      ) : (
        icon
      )}
    </B>
  );
};
