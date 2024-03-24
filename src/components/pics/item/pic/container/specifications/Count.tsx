import { Pill } from '@components/decoration/Pill';
import { TChildren } from '@brysonandrew/config-types';
import { FC } from 'react';
type TProps = {
  children: TChildren;
};
export const Count: FC<TProps> = ({
  children,
}) => {
  return (
    <Pill
      key='count'
      classValue='relative'
      gradient={
        false
          ? undefined
          : 'bg-light-lighter'
      }
    >
      {children}
    </Pill>
  );
};
