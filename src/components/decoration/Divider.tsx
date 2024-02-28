import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps;
export const Divider: FC<TProps> = ({
  classValue,
}) => {
  return (
    <img
      src='/decoration/lines/1.png'
      className={clsx(
        'w-full bg-section',
        classValue,
      )}
    />
  );
};
