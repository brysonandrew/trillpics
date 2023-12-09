import { FC } from 'react';
import { I } from '@components/Icon';
import { TIconConfig } from '@t/icons';
import {
  B,
  TProps as _TProps,
} from './B';

type TProps = _TProps & {
  icon: TIconConfig['icon'];
};
export const BCirc: FC<TProps> = ({
  icon,
  shape = 'interactive-circ-sm',
  children,
  ...props
}) => {
  return (
      <B
        look='interactive-circ'
        shape={shape}
        {...props}
      >
        <I
          classValue='relative w-full h-full'
          icon={icon}
        />
      </B>
  );
};
