import { FC } from 'react';
import { LineGray04 } from '../Line';
import { TSpaceProps } from '../space/config';
import { P2 } from '../space/P2';

type TProps = TSpaceProps;
export const Divider2: FC<
  TProps
> = () => {
  return (
    <>
      <P2 />
      <LineGray04 />
      <P2 />
    </>
  );
};
