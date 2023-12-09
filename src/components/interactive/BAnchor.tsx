import styled from '@emotion/styled';
import { TAnchorProps , TClassValueProps } from '@t/dom';
import { TInteractiveProps } from '@t/css/interactive';
import clsx from 'clsx';
import { FC } from 'react';

const Root = styled.a``;

export type TProps = TAnchorProps &
  TClassValueProps &
  TInteractiveProps;
export const BAnchor: FC<TProps> = ({
  classValue,
  children,
  shape = 'interactive-rect',
  look = 'neu-flat-risen',
  target = '_blank',
  ...props
}) => {
  return (
    <Root
      type='button'
      target={target}
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
