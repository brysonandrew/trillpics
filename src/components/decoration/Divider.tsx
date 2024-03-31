import { useApp } from '@brysonandrew/app';
import { TClassValueProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps;
export const Divider: FC<TProps> = ({
  classValue,
}) => {
  const { BackFill } = useApp();
  return (
    <BackFill
      classValue={clsx('bg-primary w-full bg-section', classValue)}
 
    />
  );
};
