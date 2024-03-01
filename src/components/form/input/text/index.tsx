import type { FC } from 'react';
import { Base } from '../Base';
import { TBaseProps } from '../../config';
import styled from '@emotion/styled';
import { TInputProps } from '@t/inputs';
import clsx from 'clsx';
import { COLOR_RECORD } from '@app/color';

const Input = styled.input`
  &::placeholder {
    color: ${COLOR_RECORD['black-7']};
  }
`;

export const Text: FC<
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
        'input-text',
        classValue,
      ),
      ...inputProps,
    }}
    {...props}
  />
);
