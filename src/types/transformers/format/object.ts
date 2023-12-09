import { TTCamelToKebab } from '.';
import { TTCamelToPascal } from './pascal';

export type TTToCamelCase<T> = {
  [Prop in keyof T as TTCamelToPascal<
    Prop & string
  >]: T[Prop];
};

export type TTKebabKeys<T> = {
  [K in keyof T as K extends string
    ? TTCamelToKebab<K>
    : K]: T[K];
};
