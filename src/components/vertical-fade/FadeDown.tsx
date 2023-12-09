import clsx from 'clsx';
import { FC } from 'react';
import { TBaseProps, VerticalFade } from '.';

type TProps = TBaseProps;
export const FadeDown: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <VerticalFade
    classValue={clsx('bg-gradient-to-b top-0', classValue)}
    {...props}
  />
);
