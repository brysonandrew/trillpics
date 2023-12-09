import { TInputProps } from '@t/inputs';
import {
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import {
  TMinMax,
  TThresholdConfig,
} from './twin/sliders/resolveThresholds';
import { TChildren } from '@t/index';

export const THUMB_SIZE = 18;

export type TBaseProps<
  T extends FieldValues,
> = Pick<
  TInputProps,
  'classValue' | 'defaultValue'
> & {
  form: UseFormReturn<T>;
};

export type TTitleLabel = {
  title: string;
  label?: TChildren;
};

export type TProps<
  T extends FieldValues,
> = TThresholdConfig &
  TBaseProps<T> &
  TTitleLabel;

export type TMinMaxProps = {
  minMax: TMinMax;
};

export type TSharedProps = TMinMaxProps;
