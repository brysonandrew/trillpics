import type { FC } from 'react';
import { Base } from './Base';
import { TBaseProps } from '../config';
import { TInputProps } from '@t/inputs';
import clsx from 'clsx';

export const Number: FC<
  TBaseProps<TInputProps>
> = ({
  inputProps: {
    classValue,
    ...inputProps
  },
  labelProps,
}) => (
  <Base
    inputProps={{
      ...inputProps,
      type: 'number',
      classValue: clsx(
        'input-text',
        classValue,
      ),
      ...inputProps,
    }}
    {...labelProps}
  />
);
