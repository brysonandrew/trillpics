import type { FC } from 'react';

import { Base } from '../input/Base';
import { TBaseProps } from '../config';
import { TInputProps } from '@t/inputs';

export const Input: FC<
  TBaseProps<TInputProps>
> = ({ inputProps, ...props }) => (
  <Base
    inputProps={{
      type: 'radio',
      ...inputProps,
    }}
    {...props}
  />
);
