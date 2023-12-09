import {
  ArrayPath,
  FieldValues,
} from 'react-hook-form';

export type TPromptValueResolver = (
  value: any,
) => any;
export type TPromptKeyResolver<
  K extends ArrayPath<FieldValues>,
> = readonly [
  key: K,
  resolver?: TPromptValueResolver,
  label?: string,
];
