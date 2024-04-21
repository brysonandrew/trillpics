import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { TChildren } from '@brysonandrew/config-types';

type TProps = {
  children: TChildren;
};
export const Portal: FC<TProps> = ({
  children,
}) => {
  return (
    <>
      {createPortal(
        <>{children}</>,
        document.body,
      )}
    </>
  );
};
