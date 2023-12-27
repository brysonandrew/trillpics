import { Circle } from '@components/decoration/Circle';
import { TChildren } from '@t/index';
import { FC } from 'react';
import { TPassedProps } from './Button';

type TProps = TPassedProps & {
  children: TChildren;
};
export const Count: FC<TProps> = ({
  isInteraction,
  children,
}) => {
  return (
    <Circle
      key='count'
      classValue='relative'
      gradient={
        isInteraction
          ? 'bg-red-orange-amber'
          : 'bg-light-lighter'
      }
      
    >
      {children}
    </Circle>
  );
};
