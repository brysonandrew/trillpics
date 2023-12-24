import clsx from 'clsx';
import { FC } from 'react';
import { TBaseProps, VerticalFade } from '.';

type TProps = TBaseProps;
export const FadeUp: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <VerticalFade
    classValue={clsx(
      'bg-gradient-to-t bottom-3',
      classValue,
    )}
    {...props}
  />
);
