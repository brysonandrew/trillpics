import clsx from 'clsx';
import { FC } from 'react';
import { Line } from '../Line';
import { TSpaceProps } from '../space/config';
import { P1 } from '../space/P1';

type TProps = TSpaceProps;
export const Divider: FC<TProps> = (
  props,
) => {
  return (
    <>
      <P1 {...props} />
      <Line
        className={clsx(
          props.classValue,
        )}
      />
    </>
  );
};
