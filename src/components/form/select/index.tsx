import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { ArrowDown } from './ArrowDown';
import clsx from 'clsx';
import { TDivProps } from '@brysonandrew/config-types';
import { TBaseProps } from '../config';
import { Label } from '../input/Label';
import { TSelectProps } from '@t/inputs';

export const clearNativeCss = css`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  outline-color: #666 !important;
`;

export const Root = styled.select`
  ${clearNativeCss}
`;
export const Option = styled.option``;

type TProps = TBaseProps<TSelectProps> &
  TDivProps & { placeholder?: string };
export const Select: FC<TProps> = ({
  classValue,
  children,
  inputProps,
  labelProps,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'relative',
        classValue,
      )}
      {...props}
    >
      <Label {...labelProps}>
        <div className='relative w-full text-highlight'>
          <Root
            className={clsx(
              'rounded-md input input-text input-border w-full',
              inputProps.classValue,
            )}
            {...inputProps}
          >
            {children}
          </Root>
          <ArrowDown />
        </div>
      </Label>
    </div>
  );
};
