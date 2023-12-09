import { UseFormReturn } from 'react-hook-form';
import { FC } from 'react';

import { Clear } from './options/Clear';
import { Paste } from './options/Paste';
import { Copy } from './options/Copy';
import { Link } from './options/Link';
import { Any } from './options/Any';
import {
  TBaseFieldValues,
  TInputProps,
} from '../config';

type TResolversConfig = {
  showResolver?(value: any): boolean;
  valueResolver?: (value: any) => any;
};

export type TProps<
  T extends TBaseFieldValues,
> = TResolversConfig &
  TInputProps<T> & {
    form: UseFormReturn<T>;
    value: any;
  };

export type TMainProps<
  T extends TBaseFieldValues,
> = Omit<TProps<T>, 'value'> &
  TOptionsProps<T>;

export type TOption<
  T extends TBaseFieldValues,
> = FC<TProps<T>>;
type TOptions<
  T extends TBaseFieldValues,
> = readonly TOption<T>[];
export type TOptionsProps<
  T extends TBaseFieldValues,
> = {
  options?: TOptions<T>;
};

export const EMPTY = [] as const;

export const ALL_OPTIONS = [
  Copy,
  Paste,
  Clear,
] as const;

export const ONLY_RECOMMENDED =
  [] as const;

export const ONLY_COPY = [
  Copy,
] as const;

export const LINK_AND_COPY = [
  Link,
  Copy,
] as const;

export const ONLY_CLIPBOARD = [
  Copy,
  Paste,
] as const;

export const RANDOM_AND_CLIPBOARD = [
  Any,
  ...ONLY_CLIPBOARD,
] as const;

export const RECOMMENDED_AND_CLIPBOARD =
  [
    ...ONLY_RECOMMENDED,
    ...ONLY_CLIPBOARD,
  ] as const;

export const ONLY_IF_VALUE_NAMES = [
  Copy.name,
  Link.name,
  Clear.name,
];
