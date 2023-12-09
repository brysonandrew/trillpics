import styled from '@emotion/styled';
import { TClassValueProps } from '@t/dom';
import { TInteractiveProps } from '@t/css/interactive';
import clsx from 'clsx';
import { FC } from 'react';
import {
  Link,
  LinkProps,
} from 'react-router-dom';

const Root = styled(Link)``;

type TProps = LinkProps &
  TClassValueProps &
  TInteractiveProps;
export const BLink: FC<TProps> = ({
  classValue,
  look,
  shape = 'interactive-rect',
  children,
  ...props
}) => { 
  return (
    <Root
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
