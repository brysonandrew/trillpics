import { FC } from 'react';
import { Line } from '../Line';
import { P1 } from '../space/P1';
import { TSpaceProps } from '../space/config';

type TProps = TSpaceProps;
export const Divider1: FC<
  TProps
> = () => {
  return (
    <>
      <P1 />
      <Line />
      <P1 />
    </>
  );
};
