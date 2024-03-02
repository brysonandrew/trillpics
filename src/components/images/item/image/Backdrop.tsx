import { TUseImageReturn } from '@components/images/useImage';
import { FC, Fragment } from 'react';

type TProps = {
  isOpen: boolean;
  backdropProps: TUseImageReturn['backdropProps'];
};
export const Backdrop: FC<TProps> = ({
  isOpen,
  backdropProps,
}) => {
  return (
    <>
      {isOpen ? (
        <div {...backdropProps} />
      ) : (
        <Fragment />
      )}
    </>
  );
};
