import { Circle } from '@components/decoration/Circle';
import { TChildren } from '@t/index';
import { FC } from 'react';
import { TPassedProps } from './Button';

type TProps = TPassedProps & {
  children: TChildren;
};
export const Count: FC<TProps> = ({
  children,
}) => {
  return (
    <Circle
      key='count'
      classValue='relative'
      gradient={
        false
          ? undefined
          : 'bg-light-lighter'
      }
      
    >
      {children}
    </Circle>
  );
};
