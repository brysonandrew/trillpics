import type { FC } from 'react';
import { Base } from '../Base';
import { TBaseProps } from '../../config';
import styled from '@emotion/styled';
import { TInputProps } from '@t/inputs';
import { COLOR_VARIABLES_LOOKUP } from '@app/colors';
import clsx from 'clsx';

const Input = styled.input`
  &::placeholder {
    color: ${COLOR_VARIABLES_LOOKUP[
      'black-7'
    ]};
  }
`;

export const Auth: FC<
  TBaseProps<TInputProps>
> = ({
  inputProps: {
    classValue,
    ...inputProps
  },
  ...props
}) => (
  <Base
    inputProps={{
      type: 'text',
      Input,
      classValue: clsx(
        'text-2xl text-white bg-black-2 px-4 py-3',
        classValue,
      ),
      ...inputProps,
    }}
    {...props}
  />
);
