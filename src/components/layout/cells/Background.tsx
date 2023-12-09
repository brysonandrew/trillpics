import type { FC } from 'react';
import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';

const Root = styled.div``;

export type TProps = {
  insetClassValue?: ClassValue;
  colorClassValue?: ClassValue;
};
export const Background: FC<TProps> = ({
  insetClassValue = '-inset-1.5',
  colorClassValue = 'bg-black-3',
}) => {
  return (
    <Root
      className={clsx(
        'absolute rounded-md',
        insetClassValue,
        colorClassValue,
      )}
    />
  );
};
