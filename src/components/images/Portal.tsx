import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { TChildren } from '@t/index';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';

type TProps = {
  children: TChildren;
};
export const Portal: FC<TProps> = ({
  children,
}) => {
  useFreezeScrollBar();

  return (
    <>
      {createPortal(
        <>{children}</>,
        document.body,
      )}
    </>
  );
};
