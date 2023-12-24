import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { FC, SVGAttributes } from 'react';

const Root = styled.svg``;

type TProps = SVGAttributes<SVGSVGElement> & {
  classValue?: ClassValue;
};
export const Gallery: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    xmlns='http://www.w3.org/2000/svg'
    className={clsx(classValue)}
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
    {...props}
  >
    <path d='M21 3H2v13h19V3M2 17h4v4H2v-4m5 0h4v4H7v-4m5 0h4v4h-4v-4m5 0h4v4h-4v-4Z' />
  </Root>
);
