import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import type { FC, SVGAttributes } from 'react';

const Root = styled.svg``;

type TProps = SVGAttributes<SVGElement> & {
  classValue?: ClassValue;
};
export const Email: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    className={clsx(classValue)}
    viewBox='0 0 24 24'
    width='20'
    height='20'
    fill='currentColor'
    {...props}
  >
    <path d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' />
  </Root>
);
