import type {
  FC,
  PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';

const Root = styled.div``;

type TProps = PropsWithChildren<{
  isOpen: boolean;
  id: string;
}>;
export const Item: FC<TProps> = ({
  id,
  isOpen,
  children,
}) => {
  return (
    <>
      {isOpen
        ? createPortal(
            <Root className='cover-fixed z-10 overflow-auto'>
              <header className='column-end p-2 w-full bg-black-04 backdrop-blur-lg'>
                <div className='row gap-2'>
                  {children}
                </div>
              </header>
            </Root>,
            document.body,
          )
        : children}
    </>
  );
};
