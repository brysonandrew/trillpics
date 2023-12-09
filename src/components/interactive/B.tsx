import styled from '@emotion/styled';
import { TButtonProps , TClassValueProps } from '@t/dom';
import { TInteractiveProps } from '@t/css/interactive';
import clsx from 'clsx';
import { FC } from 'react';

const Root = styled.button``;

export type TProps = TButtonProps &
  TClassValueProps &
  TInteractiveProps;
export const B: FC<TProps> = ({
  classValue,
  children,
  shape = 'interactive-rect',
  look = 'neu-flat-risen',
  ...props
}) => {
  return (
    <Root
      type='button'
      className={clsx(
        'interactive',
        'neu-basic',
        look,
        shape,
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
