import { TClassValueProps } from '@brysonandrew/config-types';
import { PropsWithChildren } from 'react';
import {
  FieldValues,
  Path,
} from 'react-hook-form';
import { TProps as TLabelProps } from './input/Label';

export type TInputProps<
  T extends FieldValues,
> = {
  name: Path<T>;
  title: string;
};

export type TBaseProps<
  P extends PropsWithChildren,
> = {
  inputProps: P;
  labelProps?: TLabelProps;
} & TClassValueProps;

export type TBaseFieldValues =
  FieldValues;
